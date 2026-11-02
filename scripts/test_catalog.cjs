"use strict";
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const assert=require("node:assert/strict");
const source=fs.readFileSync("site/data.js","utf8");
const scope={window:{}};
vm.runInNewContext(source,scope,{timeout:3000});
const d=scope.window.ROADMAP_DATA;
assert.ok(d&&typeof d==="object","catalog missing");
function unique(arr,name){
  const keys=arr.map(x=>x.id);
  assert.equal(new Set(keys).size,keys.length,"duplicate IDs: "+name);
}
for(const k of ["tracks","weeks","labs","challenges","resources","quiz"])
  assert.ok(Array.isArray(d[k])&&d[k].length>0,"missing "+k);
unique(d.tracks,"tracks");unique(d.weeks,"weeks");unique(d.labs,"labs");
unique(d.challenges,"challenges");unique(d.resources,"resources");
assert.equal(d.tracks.length,11,"Base must preserve original 11 tracks; dev track is added by app.js");
assert.equal(d.weeks.length,24);
assert.equal(d.labs.length,8);
assert.ok(d.resources.length>=20);
assert.ok(d.quiz.length>=20);
assert.deepEqual(Array.from(d.weeks.map(w=>w.id)),Array.from({length:24},(_,i)=>i+1));
for(const t of d.tracks){
  assert.ok(t.units.length>=4,"too few modules: "+t.id);
  assert.ok(fs.existsSync(t.doc),"track doc missing: "+t.doc);
}
for(const r of [...d.labs,...d.challenges])assert.ok(fs.existsSync(r.doc),"guide missing: "+r.doc);
for(const r of d.resources){
  assert.ok(/^https:\/\//.test(r.url),"resource must use HTTPS: "+r.id);
  assert.ok(new URL(r.url).hostname,"resource hostname missing");
}
for(const [i,q] of d.quiz.entries()){
  assert.ok(typeof q.q==="string"&&q.q.length>10,"question malformed "+i);
  assert.equal(q.options.length,4,"options malformed "+i);
  assert.ok(Number.isInteger(q.a)&&q.a>=0&&q.a<q.options.length,"answer invalid "+i);
  assert.ok(q.why.length>10,"explanation missing "+i);
}
console.log("Catalog OK:",d.tracks.length,"base tracks (+ Dev track in app),",d.weeks.length,"weeks,",d.labs.length,"labs,",d.challenges.length,"challenges,",d.resources.length,"resources,",d.quiz.length,"quiz questions.");
