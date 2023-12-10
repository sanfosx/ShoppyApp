import { MemberCard } from "../components/Members/MemberCard";
import members from "../data/members.json";

const AboutPage = () => {

  return (
    <div className="container-fluid p-1">

      <h1>Quienes somos</h1>
      <p>Somos el Grupo 6 de la Comisión 23643 que cursamos JS React 2023 del programa Codo a Codo de la Agencia de Aprendizaje
        a lo largo de la vida del Ministerio de Eduación del Gobierno de la Ciudad de Buenos Aires.
      </p>
      <h1>Integrantes</h1>
      <div className="container-fluid">
        <div className="row">

          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}

        </div>
      </div>

    </div>

  )
}

export default AboutPage
