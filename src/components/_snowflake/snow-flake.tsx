export function Snowflake() {
  const snowflakes = [];
  for (let i = 0; i < 50; i++) {
    snowflakes.push(
      <div
        key={i}
        id="snow"
        className="absolute bg-[url('/snowflake2.svg')] bg-cover animate-snow-fall"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() + 20}px`,
          height: `${Math.random() + 20}px`,
          animationDuration: `${Math.random() * 5 + 5}s`,
        }}
      />
    );
  }

  return (
    <div className="absolute">
      <div
        id="container"
        className="flex justify-center items-center relative w-screen h-screen bg-cover overflow-hidden"
      >
        {snowflakes}
      </div>
    </div>
  );
}
