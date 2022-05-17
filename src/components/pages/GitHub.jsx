import { useEffect, useState } from 'react'
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from 'react-icons/fa'
import RepoList from '../repos/RepoList'

 function GitHub() {
  const [user, setUser] = useState([])
  const [repos, setRepos] = useState([])
  

  useEffect(() => {
    getGitHubProfile()
    getGitHubRepos()
  }, [])

  const getGitHubProfile = async() => {
    const response = await fetch(`https://api.github.com/users/noybendavid`)
     
    const data = await response.json()

    setUser(data)
  }

  const getGitHubRepos = async() => {
    const response = await fetch(`https://api.github.com/users/noybendavid/repos`)
     
    const data = await response.json()

    setRepos(data)
  }

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user
  

  return (

    <div className='container w3-animate-opacity myFont mt-3'>
      <div className='row'>
        <div className='col-lg-3'>
            <img src={avatar_url} alt='profile' className='img-fluid rounded shadow-lg w3-opacity
            float-start'/>
        </div>
        <div className='col-lg-9'>
          <div className='mb-6'>
          <h3 className='myFont-h1'>{name}
          <div className="badge badge-success rounded-pill">
          {type}</div>
            </h3>
            <p className='mt-3'>{bio}</p>
            <div className="mt-4">
              <a 
              href={html_url} 
              target='_blank' 
              rel='noreferrer' 
              className='btn btn-outline-light'>
              Visit Github Profile
              </a>
            </div>
          </div>

          <div className="w-full mt-3 ">
            {location && (
              <div className="card bg-transparent shadow border-0 p-3">
                <div className="card-title fw-bolder text-secondary">
                  Location
                </div>
                <div className='text-white fw-bold'>
                  {location}
                </div>
              </div>
            )}
        </div>
      </div>
        
    </div>

    <div className='row'>
      <div className='col-sm-6 col-lg-3'>
        <div className='crad'>
          <div className='card-title mt-3 text-secondary'>
          <h4>
          Followers
          <FaUsers className='m-2 '/>
          </h4>
          </div>
          <div className='card-body myFont-h1'>
          {followers}
          </div>
        </div>
      </div>


      <div className='col-sm-6 col-lg-3'>
        <div className='crad'>
          <div className='card-title mt-3 text-secondary'>
          <h4>
          Following
          <FaUserFriends className='m-2 '/>
          </h4>
          </div>
          <div className='card-body myFont-h1'>
          {following}
          </div>
        </div>
      </div>

      <div className='col-sm-6 col-lg-3'>
        <div className='crad'>
          <div className='card-title mt-3 text-secondary'>
          <h4>
          Public Repos
          <FaCodepen className='m-2 '/>
          </h4>
          </div>
          <div className='card-body myFont-h1'>
          {public_repos}
          </div>
        </div>
      </div>

      <div className='col-sm-6 col-lg-3'>
        <div className='crad'>
          <div className='card-title mt-3 text-secondary'>
          <h4>
          Public Gists
          <FaStore className='m-2 '/>
          </h4>
          </div>
          <div className='card-body myFont-h1'>
          {public_gists}
          </div>
        </div>
      </div>
    </div>




        <RepoList repos={repos}/>
        </div>


  )
}


export default GitHub



