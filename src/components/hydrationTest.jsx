"use client";

const HydrationTest = () => {

  const a = Math.random()
  console.log(a)

  return (
    <div>
      <h1>{a}</h1>
    </div>
  )
}

export default HydrationTest;