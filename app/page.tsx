"use client"

export default function Home() {
  const channel = "ZA";
  const language = "TH";
  
  // This logic is likely where your double slash comes from
  const handleOpen = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://abc-sit.dev/";
    const path = `/auth?channel=${channel}&language=${language}`;
    
    // String concatenation error: baseUrl has / and path has /
    const buggyUrl = baseUrl + path; 
    
    alert(`Opening: ${buggyUrl}`);
    window.location.href = buggyUrl;
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">URL Builder Test</h1>
      <button 
        onClick={handleOpen}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Web App (Buggy)
      </button>
    </main>
  );
}