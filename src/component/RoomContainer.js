import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Laoding from "../component/Laoding";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if(loading){
      return <Laoding />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);