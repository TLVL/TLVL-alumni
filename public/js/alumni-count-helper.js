let alumniCount = 0;

const updateAlumniCount = async () => {
  const response = await (await fetch('/api/alumni/count')).json();
  const newAlumniCount = response.alumniCount;

  if (alumniCount !== newAlumniCount) {
    alumniCount = newAlumniCount;
    document.getElementById('alumni-count-value').innerHTML = newAlumniCount;
  }
};

window.setInterval(updateAlumniCount, 500);