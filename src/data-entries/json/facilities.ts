export interface LabCard {
  title: string;
  description: string;
  imgSrc: string;
}

export interface EquipmentTableItem {
  name: string;
  pdfLink: string;
  bookingIISc: string;
  istemLink: string;
}
export const nonIiscBookingLink = "https://forms.cloud.microsoft/r/01Ws2T1sS6";

export const labCards: LabCard[] = [
  {
    title: "Water Quality Monitoring Lab",
    description: "To protect human health and environmental ecosystems, the ICWaR Water Quality Monitoring Lab offers comprehensive analytical services. We assess water safety across four key categories: Basic Parameters, Bacteriological Analysis, Heavy Metals Analysis, and Anions & Cations; providing accurate data to support pollution tracking, safe drinking water standards, and sustainable environmental policies.",
    imgSrc: "../../../assets/images/Centres and Facilities/ICP-MS_ICWaR.webp"
  },
  {
    title: "Differential Global Positioning System (DGPS / DGNSS)",
    description: "ICWaR has an advanced model of a DGPS/DGNSS device, the Leica GS18, which comes with two receivers. This device is used for high-precision (mm/cm level accuracy) position mapping or surveying of various geographical areas. Applications include accurately determining GPS positions for sampling points, mapping glacier boundaries, measuring glacier surface ice velocities, and establishing ground control points (GCPs), among others.",
    imgSrc: "../../../assets/images/Centres and Facilities/DGPS_ICWaR.webp"
  },
  {
    title: "HPC Clusters",
    description: "ICWaR has deployed a computer cluster to improve performance and availability over that of a single computer, while typically being much more cost-effective than single computers of comparable speed. This is used by students for efficient results.",
    imgSrc: "../../../assets/images/Centres and Facilities/HPC Clusters_ICWaR.webp"
  }
];

export const equipmentTable: EquipmentTableItem[] = [
  {
    name: "Basic Parameters Analysis (pH, EC, TDS, DO, Turbidity, etc.)",
    pdfLink: "../../../assets/pdfs/Facilities/Basic Parameters Analysis Services_ICWaR.pdf",
    bookingIISc: "https://forms.office.com/r/PUcmHrimwz",
    istemLink: ""
  },
  {
    name: "Bacteriological Analysis (Total Coliforms, E. coli, etc.)",
    pdfLink: "../../../assets/pdfs/Facilities/Bacteriological Analysis Services_ICWaR.pdf",
    bookingIISc: "https://forms.office.com/r/Y5sgy1qNdn",
    istemLink: ""
  },
  {
    name: "Inductively Coupled Plasma Mass Spectrometry (ICP-MS) - Heavy Metals Analysis",
    pdfLink: "../../../assets/pdfs/Facilities/Heavy Metals Analysis Services_ICWaR.pdf",
    bookingIISc: "https://forms.office.com/r/xvxB8hCtgu",
    istemLink: "https://www.istem.gov.in/equipment-info/48412/Inductively-Coupled-Plasma-Mass-Spectrometry"
  },
  {
    name: "Ion Chromatography (IC) - Anions & Cations Analysis",
    pdfLink: "../../../assets/pdfs/Facilities/Anions & Cations Analysis Services_ICWaR.pdf",
    bookingIISc: "https://forms.office.com/r/satbWgkycf",
    istemLink: "https://www.istem.gov.in/equipment-info/61638/Ion-Chromatography"
  }
];
