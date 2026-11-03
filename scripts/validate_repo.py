#!/usr/bin/env python3
"""Offline validation: missing local links and essential site files.

No HTTP requests, scanners, or interactions with external systems.
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import unquote, urlsplit
import re
import sys

ROOT = Path(__file__).resolve().parent.parent
MARKDOWN = re.compile(r"(?<!!)\[[^\]]+\]\(([^)]+)\)")
errors = []
skip = {".git", "node_modules", ".venv"}
for file in ROOT.rglob("*.md"):
    if any(p in skip for p in file.relative_to(ROOT).parts):
        continue
    body = file.read_text(encoding="utf-8")
    for match in MARKDOWN.finditer(body):
        raw = match.group(1).strip().split(" ", 1)[0].strip("<>")
        url = urlsplit(raw)
        if url.scheme or raw.startswith(("//", "#", "mailto:")):
            continue
        target = unquote(url.path)
        if not target:
            continue
        path = (file.parent / target).resolve()
        # Skip legitimate GitHub relative navigation (e.g. ../../issues).
        if not path.is_relative_to(ROOT):
            if target in ("../../issues", "../../pulls", "../../discussions"):
                continue
            errors.append(f"{file.relative_to(ROOT)} missing/out-of-scope link: {raw}")
        elif not path.exists():
            errors.append(f"{file.relative_to(ROOT)} missing link target: {raw}")
for name in ("site/index.html","site/community.html","site/community.css","site/style.css","site/data.js","site/app.js","site/favicon.svg",".github/workflows/quality.yml"):
    if not (ROOT/name).exists():
        errors.append(f"Missing required asset {name}")
html = (ROOT/"site/index.html").read_text(encoding="utf-8")
for name in ("style.css","data.js","app.js","favicon.svg"):
    if name not in html:errors.append(f"site/index.html missing asset reference {name}")
class SiteLinkChecker(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.source = source
    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        for attr in ("href", "src"):
            raw = attributes.get(attr, "")
            if not raw:
                continue
            parsed = urlsplit(raw)
            if parsed.scheme or raw.startswith(("#", "//", "mailto:", "data:")):
                continue
            target = unquote(parsed.path)
            if not target:
                continue
            candidate = (self.source.parent / target).resolve()
            if not candidate.is_relative_to(ROOT) or not candidate.exists():
                errors.append(f"{self.source.relative_to(ROOT)} missing site asset: {raw}")
        if attributes.get("target") == "_blank":
            rel = set((attributes.get("rel") or "").split())
            if not {"noopener", "noreferrer"}.issubset(rel):
                errors.append(f"{self.source.relative_to(ROOT)} unsafe external link missing rel")

for name in ("site/index.html", "site/community.html"):
    source = ROOT / name
    if source.exists():
        parser = SiteLinkChecker(source)
        parser.feed(source.read_text(encoding="utf-8"))

if errors:
    print("\n".join(errors),file=sys.stderr)
    sys.exit(1)
print("Offline links and site assets OK.")
