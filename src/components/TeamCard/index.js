// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="team-container" key={id}>
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <h1 className="team-heading">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
