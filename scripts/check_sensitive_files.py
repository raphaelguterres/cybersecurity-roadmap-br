#!/usr/bin/env python3
"""Fail on known high-risk accidentally committed artifact filenames."""
from pathlib import Path
import subprocess
import sys

repo=Path(__file__).resolve().parent.parent
proc=subprocess.run(["git","ls-files","-z"],cwd=repo,capture_output=True,check=True)
bad=[]
for raw in filter(None,proc.stdout.decode("utf-8").split("\0")):
    name=Path(raw).name.lower()
    if name in {".env","id_rsa","id_ed25519"} or name.endswith((".pem",".p12",".pfx",".pcap",".pcapng",".evtx",".dmp",".dump")):
        bad.append(raw)
if bad:
    print("Potential private artifacts tracked by git:",*bad,sep="\n",file=sys.stderr)
    sys.exit(1)
print("No obvious private artifacts are tracked by Git.")
