import * as SC from "./styles";
import { Header } from "../../components/header";


export default function Order() {
    return (
        <SC.Container>
            <Header title="Ordens de serviço" />

            <SC.Wrapper>
                <SC.Row>
                    <SC.Left>Ordem</SC.Left>
                    <SC.Right>368927</SC.Right>
                </SC.Row>

                <SC.Row>
                    <SC.Left>Data</SC.Left>
                    <SC.Right>29/08/2023</SC.Right>
                </SC.Row>

                <SC.Row>
                    <SC.Left>Empresa</SC.Left>
                    <SC.Right>Santil Lalala</SC.Right>
                </SC.Row>

                <SC.Row>
                    <SC.Left>{`Av. Nossa Senhora do  Ó, 987 - Freguesia do Ó`}</SC.Left>
                </SC.Row>
                
                <SC.Row>
                    <SC.Left>Telefone </SC.Left>
                    <SC.Right>(11) 98825-9997</SC.Right>
                </SC.Row>

                <SC.Row>
                    <SC.Left>Contato </SC.Left>
                    <SC.Right>João</SC.Right>
                </SC.Row>

                <SC.Address>
                    <SC.TextAddress>{`Retirar: R. das Tabocas, 253, São Paulo, SP \nMe avisar quando chegar no endereço, é uma padaria, Fabio vai entregar na mão do boy Entregar: Rua Ribeiro de Morais 303`}
                    </SC.TextAddress>
                </SC.Address>

                <SC.ButtonStart>
                    <SC.TextStart>Iniciar</SC.TextStart>
                </SC.ButtonStart>
            </SC.Wrapper>
        </SC.Container>
    );
}