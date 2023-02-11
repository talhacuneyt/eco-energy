import Link from "next/link";
import { FaPlus } from "react-icons/fa";

import * as Styled from "./Header.styled";

const Header: React.FunctionComponent = () => {
  return (
    <Styled.Header>
      <Link href="/home">ANASAYFA</Link>
      <div>
        <Link href={"/sign-in"}>
          <FaPlus width={10} color={"#1ccf4e"} />
          <p>ÜYE OL</p>
        </Link>
        <Link href={"/sustainable"}>
          <p>SÜRDÜRÜLEBİLİR ENERJİ NEDİR</p>
        </Link>
        <Link href={"/energy-in-house"}>
          <p>EVDE ENERJİ</p>
        </Link>
        <Link href={"/energy-in-country"}>
          <p>ÜLKEDE ENERJİ</p>
        </Link>
        <Link href={"/invoice"}>
          <p>FATURA HESABI YAPMA</p>
        </Link>
      </div>
    </Styled.Header>
  );
};

export default Header;
