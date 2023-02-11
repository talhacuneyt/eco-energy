import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import SustainableSourceCard from "@/components/sustainable-source-card";
import MainLayout from "@/layout/main";

import * as Styled from "./Country.styled";
import { sustainableSources } from "./constants";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <MainLayout pageTitle="Ülkede Enerji">
      <Styled.Country>
        <Box
          sx={{
            width: "100%",
            border: "2px solid #1CCF4E",
            borderRadius: "12px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Tabs
              style={{
                backgroundColor: "#000",
                width: "100%",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                style={{ color: "#fff", width: "calc(100% / 7)" }}
                label="MARMARA BÖLGESİ"
                {...a11yProps(0)}
              />
              <Tab
                style={{ color: "#fff", width: "calc(100% / 7)" }}
                label="EGE BÖLGESİ"
                {...a11yProps(1)}
              />
              <Tab
                style={{ color: "#fff", width: "calc(100% / 7)" }}
                label="AKDENİZ BÖLGESİ"
                {...a11yProps(2)}
              />
              <Tab
                style={{ color: "#fff", width: "calc(100% / 7)" }}
                label="KARADENİZ BÖLGESİ"
                {...a11yProps(3)}
              />
              <Tab
                style={{ color: "#fff", width: "calc(100% / 7)" }}
                label="İÇ ANADOLU BÖLGESİ"
                {...a11yProps(4)}
              />
              <Tab
                style={{ color: "#fff", width: "calc(100% / 7)" }}
                label="DOĞU ANADOLU BÖLGESİ"
                {...a11yProps(5)}
              />
              <Tab
                style={{ color: "#fff", width: "calc(100% / 7)" }}
                label="GÜNEY DOĞU ANADOLU BÖLGESİ"
                {...a11yProps(6)}
              />
            </Tabs>
          </Box>
          <Styled.Wrapper>
            {sustainableSources.map((source, index) => (
              <SustainableSourceCard key={index} {...source} />
            ))}
          </Styled.Wrapper>
          {/* <TabPanel value={value} index={0}>
            <Tablinks
              image="/images/energy-in-country/marmara.png"
              title="Marmara Bölgesi için kullanılan sürdürülebilir enerji kaynakları şunlardır:"
              text="
              Marmara Bölgesi, güneşli bir coğrafya olduğundan, güneş enerjisi potansiyeli açısından zengindir. Fotovoltaik paneller, güneş enerjisi kolektörleri ve güneş enerjisi takviyeli ısıtma sistemleri gibi birçok teknolojide güneş enerjisi üretilir."
              text1="
              Marmara Bölgesi, rüzgar enerjisi potansiyeli açısından zengin bir coğrafya olup, rüzgar türbinleri ile rüzgar enerjisi üretilir."
              text2="
              Marmara Bölgesi, hidroelektrik enerji potansiyeli açısından zengin bir coğrafya olup, hidroelektrik santraller için uygun bir ortam sağlar. Hidroelektrik enerji, baraj, gölet ve çağıltılı sistemler gibi birçok teknolojide kullanılabilir."
              text3="
              Marmara Bölgesi, jeotermal enerji potansiyeli açısından zengin bir coğrafya olup, yer altı sıcak su kaynaklarının enerji potansiyelini kullanarak üretilen jeotermal enerji, ısıtma ve soğutma sistemleri gibi pek çok uygulama için kullanılabilir."
              text4="
              Marmara Bölgesi, odun, mısır, baklagil gibi organik materyallerin yetiştiği bir coğrafya olduğundan, bu materyaller biokütle enerjisi olarak kullanılabilir. Biokütle enerjisi, elektrik ve ısı enerjisi olarak kullanılabilir."
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Tablinks
              image="/images/energy-in-country/ege.png"
              title="Ege Bölgesi için kullanılan sürdürülebilir enerji kaynakları şunlardır:"
              text="
              Ege Bölgesi, güneşli bir coğrafya olduğundan, güneş enerjisi potansiyeli açısından zengindir. Fotovoltaik paneller, güneş enerjisi kolektörleri ve güneş enerjisi takviyeli ısıtma sistemleri gibi birçok teknolojide güneş enerjisi üretilir."
              text1="
              Ege Bölgesi, rüzgar enerjisi potansiyeli açısından zengin bir coğrafya olup, rüzgar türbinleri ile rüzgar enerjisi üretilir."
              text2="
              Ege Bölgesi, hidroelektrik enerji potansiyeli açısından zengin bir coğrafya olup, hidroelektrik santraller için uygun bir ortam sağlar. Hidroelektrik enerji, baraj, gölet ve çağıltılı sistemler gibi birçok teknolojide kullanılabilir."
              text3="
              Ege Bölgesi, jeotermal enerji potansiyeli açısından zengin bir coğrafya olup, yer altı sıcak su kaynaklarının enerji potansiyelini kullanarak üretilen jeotermal enerji, ısıtma ve soğutma sistemleri gibi pek çok uygulama için kullanılabilir."
              text4="
              Ege Bölgesi, odun, mısır, baklagil gibi organik materyallerin yetiştiği bir coğrafya olduğundan, bu materyaller biokütle enerjisi olarak kullanılabilir. Biokütle enerjisi, elektrik ve ısı enerjisi olarak kullanılabilir."
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Tablinks
              image="/images/energy-in-country/akdeniz.svg"
              title="Akdeniz Bölgesi için kullanılan sürdürülebilir enerji kaynakları şunlardır:"
              text="
              Akdeniz Bölgesi, güneşli bir coğrafya olduğundan, güneş enerjisi potansiyeli açısından zengindir. Fotovoltaik paneller, güneş enerjisi kolektörleri ve güneş enerjisi takviyeli ısıtma sistemleri gibi birçok teknolojide güneş enerjisi üretilir."
              text1="
              Akdeniz Bölgesi, rüzgar enerjisi potansiyeli açısından zengin bir coğrafya olup, rüzgar türbinleri ile rüzgar enerjisi üretilir."
              text2="
              Akdeniz Bölgesi, hidroelektrik enerji potansiyeli açısından zengin bir coğrafya olup, hidroelektrik santraller için uygun bir ortam sağlar. Hidroelektrik enerji, baraj, gölet ve çağıltılı sistemler gibi birçok teknolojide kullanılabilir."
              text3="
              Akdeniz Bölgesi, jeotermal enerji potansiyeli açısından zengin bir coğrafya olup, yer altı sıcak su kaynaklarının enerji potansiyelini kullanarak üretilen jeotermal enerji, ısıtma ve soğutma sistemleri gibi pek çok uygulama için kullanılabilir."
              text4="
              Akdeniz Bölgesi, odun, mısır, baklagil gibi organik materyallerin yetiştiği bir coğrafya olduğundan, bu materyaller biokütle enerjisi olarak kullanılabilir. Biokütle enerjisi, elektrik ve ısı enerjisi olarak kullanılabilir."
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Tablinks
              image="/images/energy-in-country/karadeniz.png"
              title="Karadeniz Bölgesi için kullanılan sürdürülebilir enerji kaynakları şunlardır:"
              text="
              Karadeniz Bölgesi, güneşli bir coğrafya olduğundan, güneş enerjisi potansiyeli açısından zengindir. Fotovoltaik paneller, güneş enerjisi kolektörleri ve güneş enerjisi takviyeli ısıtma sistemleri gibi birçok teknolojide güneş enerjisi üretilir."
              text1="
              Karadeniz Bölgesi, rüzgar enerjisi potansiyeli açısından zengin bir coğrafya olup, rüzgar türbinleri ile rüzgar enerjisi üretilir."
              text2="
              Karadeniz Bölgesi, hidroelektrik enerji potansiyeli açısından zengin bir coğrafya olup, hidroelektrik santraller için uygun bir ortam sağlar. Hidroelektrik enerji, baraj, gölet ve çağıltılı sistemler gibi birçok teknolojide kullanılabilir."
              text3="
              Karadeniz Bölgesi, jeotermal enerji potansiyeli açısından zengin bir coğrafya olup, yer altı sıcak su kaynaklarının enerji potansiyelini kullanarak üretilen jeotermal enerji, ısıtma ve soğutma sistemleri gibi pek çok uygulama için kullanılabilir."
              text4="
              Karadeniz Bölgesi, odun, mısır, baklagil gibi organik materyallerin yetiştiği bir coğrafya olduğundan, bu materyaller biokütle enerjisi olarak kullanılabilir. Biokütle enerjisi, elektrik ve ısı enerjisi olarak kullanılabilir."
            />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Tablinks
              image="/images/energy-in-country/ic-anadolu.gif"
              title="Marmara Bölgesi için kullanılan sürdürülebilir enerji kaynakları şunlardır:"
              text="
              Marmara Bölgesi, güneşli bir coğrafya olduğundan, güneş enerjisi potansiyeli açısından zengindir. Fotovoltaik paneller, güneş enerjisi kolektörleri ve güneş enerjisi takviyeli ısıtma sistemleri gibi birçok teknolojide güneş enerjisi üretilir."
              text1="
              Marmara Bölgesi, rüzgar enerjisi potansiyeli açısından zengin bir coğrafya olup, rüzgar türbinleri ile rüzgar enerjisi üretilir."
              text2="
              Marmara Bölgesi, hidroelektrik enerji potansiyeli açısından zengin bir coğrafya olup, hidroelektrik santraller için uygun bir ortam sağlar. Hidroelektrik enerji, baraj, gölet ve çağıltılı sistemler gibi birçok teknolojide kullanılabilir."
              text3="
              Marmara Bölgesi, jeotermal enerji potansiyeli açısından zengin bir coğrafya olup, yer altı sıcak su kaynaklarının enerji potansiyelini kullanarak üretilen jeotermal enerji, ısıtma ve soğutma sistemleri gibi pek çok uygulama için kullanılabilir."
              text4="
              Marmara Bölgesi, odun, mısır, baklagil gibi organik materyallerin yetiştiği bir coğrafya olduğundan, bu materyaller biokütle enerjisi olarak kullanılabilir. Biokütle enerjisi, elektrik ve ısı enerjisi olarak kullanılabilir."
            />
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Tablinks
              image="/images/energy-in-country/dogu-anadolu.png"
              title="İç Anadolu Bölgesi için kullanılan sürdürülebilir enerji kaynakları şunlardır:"
              text="
              İç Anadolu Bölgesi, güneşli bir coğrafya olduğundan, güneş enerjisi potansiyeli açısından zengindir. Fotovoltaik paneller, güneş enerjisi kolektörleri ve güneş enerjisi takviyeli ısıtma sistemleri gibi birçok teknolojide güneş enerjisi üretilir."
              text1="
              İç Anadolu Bölgesi, rüzgar enerjisi potansiyeli açısından zengin bir coğrafya olup, rüzgar türbinleri ile rüzgar enerjisi üretilir."
              text2="
              İç Anadolu Bölgesi, hidroelektrik enerji potansiyeli açısından zengin bir coğrafya olup, hidroelektrik santraller için uygun bir ortam sağlar. Hidroelektrik enerji, baraj, gölet ve çağıltılı sistemler gibi birçok teknolojide kullanılabilir."
              text3="
              İç Anadolu Bölgesi, jeotermal enerji potansiyeli açısından zengin bir coğrafya olup, yer altı sıcak su kaynaklarının enerji potansiyelini kullanarak üretilen jeotermal enerji, ısıtma ve soğutma sistemleri gibi pek çok uygulama için kullanılabilir."
              text4="
              İç Anadolu Bölgesi, odun, mısır, baklagil gibi organik materyallerin yetiştiği bir coğrafya olduğundan, bu materyaller biokütle enerjisi olarak kullanılabilir. Biokütle enerjisi, elektrik ve ısı enerjisi olarak kullanılabilir."
            />
          </TabPanel>
          <TabPanel value={value} index={6}>
            <Tablinks
              image="/images/energy-in-country/guney-dogu.png"
              title="Marmara Bölgesi için kullanılan sürdürülebilir enerji kaynakları şunlardır:"
              text="
              Marmara Bölgesi, güneşli bir coğrafya olduğundan, güneş enerjisi potansiyeli açısından zengindir. Fotovoltaik paneller, güneş enerjisi kolektörleri ve güneş enerjisi takviyeli ısıtma sistemleri gibi birçok teknolojide güneş enerjisi üretilir."
              text1="
              Marmara Bölgesi, rüzgar enerjisi potansiyeli açısından zengin bir coğrafya olup, rüzgar türbinleri ile rüzgar enerjisi üretilir."
              text2=""
              text3="
              Marmara Bölgesi, jeotermal enerji potansiyeli açısından zengin bir coğrafya olup, yer altı sıcak su kaynaklarının enerji potansiyelini kullanarak üretilen jeotermal enerji, ısıtma ve soğutma sistemleri gibi pek çok uygulama için kullanılabilir."
              text4="
              Marmara Bölgesi, odun, mısır, baklagil gibi organik materyallerin yetiştiği bir coğrafya olduğundan, bu materyaller biokütle enerjisi olarak kullanılabilir. Biokütle enerjisi, elektrik ve ısı enerjisi olarak kullanılabilir."
            />
          </TabPanel> */}
        </Box>
      </Styled.Country>
    </MainLayout>
  );
}
