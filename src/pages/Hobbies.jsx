const Hobbies = () => {
  const hobbies = [
    "Exploring cybersecurity tools",
    "Building web applications",
    "Listening to music",
    "Learning new technologies",
  ];

  return (
    <section className="max-w-3xl mx-auto text-center space-y-6">
      <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">Hobbies & Interests</h1>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {hobbies.map((hobby, i) => (
          <li key={i}>{hobby}</li>
        ))}
      </ul>
    </section>
  );
};

export default Hobbies;
