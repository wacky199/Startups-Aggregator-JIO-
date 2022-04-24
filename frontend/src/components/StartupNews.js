import StartupCard from "./StartupCard";

export default function DisplayStartupNews(props) {
  const pagesVisited = props.pageNumber * props.dataPerPage;
  const displayData = props.data
    .slice(pagesVisited, pagesVisited + props.dataPerPage)
    .map((page, index) => {
      return <StartupCard index={index} data={page} />;
    });
  return (
    <div className="container">
      <h1 className="heading">STARTUP NEWS !!!</h1>
      <div className="startupnews">{displayData}</div>
    </div>
  );
}
