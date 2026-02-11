const UploadMaterial = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Upload Learning Material</h1>
    <form className="bg-white rounded-xl p-6 card-shadow grid gap-4 max-w-2xl">
      <input className="border rounded-lg px-3 py-2" placeholder="Course title" />
      <input className="border rounded-lg px-3 py-2" type="url" placeholder="Resource URL" />
      <textarea className="border rounded-lg px-3 py-2" rows="4" placeholder="Description" />
      <button className="px-4 py-2 bg-primary text-white rounded-lg w-fit">Upload</button>
    </form>
  </div>
);

export default UploadMaterial;
