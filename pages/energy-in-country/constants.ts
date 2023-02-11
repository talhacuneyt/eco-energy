import { SustainableSourceCardProps } from "@/components/sustainable-source-card";

export const sustainableSources: Array<
  SustainableSourceCardProps & { whichArea: number }
> = [
  {
    description:
      "Güneşli bir coğrafya olduğundan, güneş enerjisi potansiyeli açısından zengindir. Fotovoltaik paneller, güneş enerjisi kolektörleri ve güneş enerjisi takviyeli ısıtma sistemleri gibi birçok teknolojide güneş enerjisi üretilir.",
    image: "/images/sustainable/Group-4.png",
    title: "Güneş Enerjisi",
    whichArea: 1,
  },
  {
    description:
      "Rüzgar enerjisi potansiyeli açısından zengin bir coğrafya olup, rüzgar türbinleri ile rüzgar enerjisi üretilir.",
    image: "/images/sustainable/Group-5.png",
    title: "Rüzgar Enerjisi",
    whichArea: 1,
  },
  {
    description:
      "Hidroelektrik enerji potansiyeli açısından zengin bir coğrafya olup, hidroelektrik santraller için uygun bir ortam sağlar. Hidroelektrik enerji, baraj, gölet ve çağıltılı sistemler gibi birçok teknolojide kullanılabilir.",
    image: "/images/sustainable/Group-1.png",
    title: "Hidroelektrik Enerji",
    whichArea: 1,
  },
  {
    description:
      "Jeotermal enerji potansiyeli açısından zengin bir coğrafya olup, yer altı sıcak su kaynaklarının enerji potansiyelini kullanarak üretilen jeotermal enerji, ısıtma ve soğutma sistemleri gibi pek çok uygulama için kullanılabilir.",
    image: "/images/sustainable/Group-2.png",
    title: "Jeotermal Enerji",
    whichArea: 1,
  },
  {
    description:
      "Odun, mısır, baklagil gibi organik materyallerin yetiştiği bir coğrafya olduğundan, bu materyaller biokütle enerjisi olarak kullanılabilir. Biokütle enerjisi, elektrik ve ısı enerjisi olarak kullanılabilir.",
    image: "/images/sustainable/Group-3.png",
    title: "Biokütle Enerjisi",
    whichArea: 1,
  },
];
