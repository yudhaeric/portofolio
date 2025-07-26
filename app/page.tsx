export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4 text-center">
      <h1 className="text-4xl font-extrabold">Welcome to my Portofolio</h1>
      <div className="mt-8 space-y-2">
        <p className="font-normal">This is regular text (weight 400).</p>
        <p className="font-medium">This is medium text (weight 500).</p>
        <p className="font-semibold">This is semi-bold text (weight 600).</p>
        <p className="font-extrabold">This is extra-bold text (weight 800).</p>
      </div>
    </div>
  );
}
