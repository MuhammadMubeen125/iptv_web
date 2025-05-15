// app/head.tsx

export default function Head() {
  return (
    <>
      <title>NakedTurtle</title>
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      {/* fallback PNG */}
      <link rel="icon" href="/favicon.png" type="image/png" />
      {/* other head tags if needed */}
    </>
  );
}
