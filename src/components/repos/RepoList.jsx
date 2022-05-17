import RepoItem from "./RepoItem"

function RepoList({repos}) {
  return (
    <div className='mt-3 rounded border-0 shadow-lg card bg-transparent'>
    <div className='card-body'>
      <h2 className='text-start-xl text-white my-4 fw-bold card-title'>
        Latest Repositories
      </h2>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo}/>
      ))}
    </div>
  </div>
  )
}

export default RepoList
 