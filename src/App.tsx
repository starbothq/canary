import "./index.css";
import { Presentation } from "./Presentation";
import { CoverSlide } from "./CoverSlide";
import { MissionSlide } from "./MissionSlide";
import { ProductSlide } from "./ProductSlide";
import { QuoteSlide } from "./QuoteSlide";
import { CanaryWharfSlide } from "./CanaryWharfSlide";
import { AudienceSlide } from "./AudienceSlide";
import { DeploymentSlide } from "./DeploymentSlide";
import { FinancialsSlide } from "./FinancialsSlide";
import { InvestmentSlide } from "./InvestmentSlide";
import { ContactSlide } from "./ContactSlide";

export function App() {
  return (
    <Presentation
      slides={[
        <CoverSlide />,
        <MissionSlide />,
        <ProductSlide />,
        <QuoteSlide />,
        <CanaryWharfSlide />,
        <AudienceSlide />,
        <DeploymentSlide />,
        <FinancialsSlide />,
        <InvestmentSlide />,
        <ContactSlide />,
      ]}
    />
  );
}

export default App;
