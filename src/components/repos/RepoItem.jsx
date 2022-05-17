import {FaEye, FaInfo, FaLink, FaStar, FaUtensils} from 'react-icons/fa'

function RepoItem({repo}) {

  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return (

   <div className='mb-2 rounded card border-0 shadow-lg'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl fw-bold'>
          <a className='myFont text-decoration-none'
          href={html_url}>
            <FaLink className='mr-3'/> {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div>

          <div className="mr-2 badge badge-info">
            <FaEye className='mr-2'/> {watchers_count}
          </div>

          <div className="mr-2 badge badge-success">
            <FaStar className='mr-2'/> {stargazers_count}
          </div>

          <div className="mr-2 badge badge-error">
            <FaInfo className='mr-2'/> {open_issues}
          </div>

          <div className="mr-2 badge badge-warning">
            <FaUtensils className='mr-2'/> {forks}
          </div>

        </div>
      </div>
    </div>
  )
}

export default RepoItem
