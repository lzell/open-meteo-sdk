// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { ValuesAndMember } from '../openmeteo-sdk/values-and-member.js';


export class ValuesAndLevelAndMember {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):ValuesAndLevelAndMember {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsValuesAndLevelAndMember(bb:flatbuffers.ByteBuffer, obj?:ValuesAndLevelAndMember):ValuesAndLevelAndMember {
  return (obj || new ValuesAndLevelAndMember()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsValuesAndLevelAndMember(bb:flatbuffers.ByteBuffer, obj?:ValuesAndLevelAndMember):ValuesAndLevelAndMember {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new ValuesAndLevelAndMember()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

level():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

values(index: number, obj?:ValuesAndMember):ValuesAndMember|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new ValuesAndMember()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

valuesLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startValuesAndLevelAndMember(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addLevel(builder:flatbuffers.Builder, level:number) {
  builder.addFieldInt32(0, level, 0);
}

static addValues(builder:flatbuffers.Builder, valuesOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, valuesOffset, 0);
}

static createValuesVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startValuesVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endValuesAndLevelAndMember(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createValuesAndLevelAndMember(builder:flatbuffers.Builder, level:number, valuesOffset:flatbuffers.Offset):flatbuffers.Offset {
  ValuesAndLevelAndMember.startValuesAndLevelAndMember(builder);
  ValuesAndLevelAndMember.addLevel(builder, level);
  ValuesAndLevelAndMember.addValues(builder, valuesOffset);
  return ValuesAndLevelAndMember.endValuesAndLevelAndMember(builder);
}
}
