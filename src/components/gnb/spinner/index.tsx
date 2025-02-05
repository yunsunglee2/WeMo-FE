function Spinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    </div>
  );
}

export default Spinner;
