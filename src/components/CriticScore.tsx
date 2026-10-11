interface CriticScore {
  criticScore: number;
}
function CriticScore({ criticScore }: CriticScore) {
//   const color = criticScore > 75 ? "green" : criticScore > 60 ? "yellow" : "";

  return (
    <div className={`inline-flex rounded px-1 py-0 bg-green-100 text-green-400`} >
      {criticScore}
    </div>
  );
}
export default CriticScore;
