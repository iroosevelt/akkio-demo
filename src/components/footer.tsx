import React from "react";
import Container from "./container";

export default function Footer() {
  return (
    <Container>
      <section className="bg-[#C5FD2C] w-full h-[400px]">
        {/* Additional content can go here */}
      </section>
      <footer className="w-full bg-white grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-1 w-full  bg-red-500 p-4">Content 1</div>
        <div className="col-span-1 w-full  bg-green-500 p-4">Content 2</div>
        <div className="col-span-1 w-full  bg-blue-500 p-4">Content 3</div>
        <div className="col-span-1 w-full  bg-yellow-500 p-4">Content 4</div>
        <div className="col-span-1  w-full md:col-span-4 bg-purple-500 p-4">
          Content 5
        </div>
      </footer>
    </Container>
  );
}
