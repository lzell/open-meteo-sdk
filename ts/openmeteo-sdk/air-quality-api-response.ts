// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import { AirQualityCurrent } from '../openmeteo-sdk/air-quality-current.js';
import { AirQualityHourly } from '../openmeteo-sdk/air-quality-hourly.js';
import { AirQualityModel } from '../openmeteo-sdk/air-quality-model.js';
import { TimeRange } from '../openmeteo-sdk/time-range.js';


export class AirQualityApiResponse {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):AirQualityApiResponse {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsAirQualityApiResponse(bb:flatbuffers.ByteBuffer, obj?:AirQualityApiResponse):AirQualityApiResponse {
  return (obj || new AirQualityApiResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsAirQualityApiResponse(bb:flatbuffers.ByteBuffer, obj?:AirQualityApiResponse):AirQualityApiResponse {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new AirQualityApiResponse()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

latitude():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

longitude():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

elevation():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

model():AirQualityModel {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt8(this.bb_pos + offset) : AirQualityModel.best_match;
}

generationtimeMs():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
}

utcOffsetSeconds():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
}

timezone():string|null
timezone(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
timezone(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

timezoneAbbreviation():string|null
timezoneAbbreviation(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
timezoneAbbreviation(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

time(obj?:TimeRange):TimeRange|null {
  const offset = this.bb!.__offset(this.bb_pos, 20);
  return offset ? (obj || new TimeRange()).__init(this.bb_pos + offset, this.bb!) : null;
}

hourly(obj?:AirQualityHourly):AirQualityHourly|null {
  const offset = this.bb!.__offset(this.bb_pos, 22);
  return offset ? (obj || new AirQualityHourly()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

current(obj?:AirQualityCurrent):AirQualityCurrent|null {
  const offset = this.bb!.__offset(this.bb_pos, 24);
  return offset ? (obj || new AirQualityCurrent()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

static startAirQualityApiResponse(builder:flatbuffers.Builder) {
  builder.startObject(11);
}

static addLatitude(builder:flatbuffers.Builder, latitude:number) {
  builder.addFieldFloat32(0, latitude, 0.0);
}

static addLongitude(builder:flatbuffers.Builder, longitude:number) {
  builder.addFieldFloat32(1, longitude, 0.0);
}

static addElevation(builder:flatbuffers.Builder, elevation:number) {
  builder.addFieldFloat32(2, elevation, 0.0);
}

static addModel(builder:flatbuffers.Builder, model:AirQualityModel) {
  builder.addFieldInt8(3, model, AirQualityModel.best_match);
}

static addGenerationtimeMs(builder:flatbuffers.Builder, generationtimeMs:number) {
  builder.addFieldFloat32(4, generationtimeMs, 0.0);
}

static addUtcOffsetSeconds(builder:flatbuffers.Builder, utcOffsetSeconds:number) {
  builder.addFieldInt32(5, utcOffsetSeconds, 0);
}

static addTimezone(builder:flatbuffers.Builder, timezoneOffset:flatbuffers.Offset) {
  builder.addFieldOffset(6, timezoneOffset, 0);
}

static addTimezoneAbbreviation(builder:flatbuffers.Builder, timezoneAbbreviationOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, timezoneAbbreviationOffset, 0);
}

static addTime(builder:flatbuffers.Builder, timeOffset:flatbuffers.Offset) {
  builder.addFieldStruct(8, timeOffset, 0);
}

static addHourly(builder:flatbuffers.Builder, hourlyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(9, hourlyOffset, 0);
}

static addCurrent(builder:flatbuffers.Builder, currentOffset:flatbuffers.Offset) {
  builder.addFieldOffset(10, currentOffset, 0);
}

static endAirQualityApiResponse(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static finishAirQualityApiResponseBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
}

static finishSizePrefixedAirQualityApiResponseBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
}

}
