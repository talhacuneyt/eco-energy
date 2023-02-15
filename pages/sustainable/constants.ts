import { FlipCardProps } from "@/components/flip-cards";

export const sustainables: Array<
  Omit<FlipCardProps, "href"> & { iframe: string }
> = [
  {
    description: "Haberler",
    iframe: "https://www.trthaber.com/etiket/ruzgar-enerjisi/",
    image: "/images/sustainable/Group-5.png",
    text: "Yenilenebilir enerji kaynaklarından biri olan ve bu yönüyle çevre sağlığında efektif çözümler üretebilen rüzgar enerjisi; atmosferdeki sıcak ve soğuk havanın yer değiştirmesi sonucu oluşan rüzgarın kinetik enerjisinin öncelikle mekanik daha sonrasında da elektrik enerjisine dönüştürülmesi olarak tanımlanabilir.İnsanlık tarihinde yel değirmenlerinin çalıştırılmasından su pompalamaya kadar tarımın birçok noktasında kullanılan rüzgar enerjisi, 1891’de Poul La Cour’un Danimarka’da rüzgar enerjisinden elektrik üretecek türbini inşa etmesi ile hayatımızda çok daha aktif rol almaya başladı.",
    title: "Rüzgar Enerjisi Nedir?",
  },
  {
    description: "Haberler",
    iframe: "https://www.trthaber.com/etiket/gunes-enerjisi/",
    image: "/images/sustainable/Group-4.png",
    text: "Yeryüzünün en temiz yenilenebilir enerji kaynagi olan günes enerjisi, aslinda isima enerjisidir. Bu enerjinin büyük bir kismi hidrojenden olusmaktadir. Bu sebeple yeryüzünün en temiz yenilenebilir enerji kaynagi olarak bilinmektedir. Günes içerisinde bulunan hidrojenlerin helyuma dönüsmesi sirasinda açiga çikan isima enerjilerine günes enerjisi denilmektedir. Dünya disinda bu enerji neredeyse sabittir ve 1370 W/m2 güce sahiptir. Bu gücün yeryüzündeki gücü maksimum 1100 W/m2’dir. Bu isinimlar günes panelleri sayesinde elektrik enerjisine çevrilmektedir. Bunu yapan sistemlere de “Günes Paneli Sistemi” veya “Solar Panel Sistemi” denilmekte. Türkiye konum itibari ile günes enerji sistemlerine oldukça elverislidir. Tüm dünyada oldugu gibi ülkemizde de günden güne günes panelleri hayatimiza girmektedir. Diger yenilenebilir enerji kaynaklarina göre daha temiz ve az maliyetli oldugu için hizla yayilmakta ve kullanilmaktadir. Dünya üzerinde günes enerjisinden elektrik üretim orani artis göstermektedir. Günümüzde günes paneli tarlalari, günes paneli arazileri ve fabrika çatilarinda sik sik kullanilmaktadir.",
    title: "Güneş Enerjisi",
  },
  {
    description: "Haberler",
    iframe: "https://www.enerjigazetesi.ist/biyogaz-ve-biyokutle-haberleri/",
    image: "/images/sustainable/Group-3.png",
    text: "Yenilenebilir enerjinin en bilinen biçimleri bir çok insan için rüzgar ve güneştir. Ancak “biyokütle” atalarımızın ateşin sırrını öğrendiğinden beri kullanılan yenilenebilir enerjinin en eski kaynağıdır. Hızlı bir artış gösteren nüfus ve sanayileşme enerji ihtiyacını da beraberinde getirmiştir. Enerjinin çevresel kirliliğe yol açmadan sürdürülebilir olarak sağlanabilmesi için kullanılacak kaynakların başında ise biyokütle enerjisi gelmektedir.",
    title: "Biomass Enerjisi",
  },
  {
    description: "Haberler",
    iframe:
      "https://www.trthaber.com/haber/bilim-teknoloji/turkiyenin-gucu-jeotermal-enerji-706421.html",
    image: "/images/sustainable/Group-2.png",
    text: "Jeotermal enerji, dünyanın alt yüzeyinde elde edilen ısıdır. Su ve/veya buhar jeotermal enerjiyi dünya yüzeyine taşır. Özelliklerine bağlı olarak, jeotermal enerji ısıtma ve soğutma amacıyla veya temiz elektrik üretmek için kullanılabilir. Bununla birlikte, elektrik için, genellikle tektonik olarak aktif bölgelere yakın konumdaki yüksek veya orta sıcaklık kaynaklarına ihtiyaç duyulur. Farklı olgunluk seviyelerinde farklı jeotermal teknolojiler vardır. Bölgesel ısıtma, jeotermal ısı pompaları, seralar ve diğer uygulamalar gibi doğrudan kullanımlar için teknolojiler yaygın olarak kullanılır. Doğal olarak yüksek geçirgenliğe sahip hidrotermal rezervuarlardan elektrik üretimi teknolojisi olgun ve güvenilirdir. Bununla birlikte, orta sıcaklık alanları gittikçe daha fazla kullanılıyor ve jeotermal akışkanın bir işlem akışkanını kapalı bir döngüde ısıtmak için ısı eşanjörleri yoluyla kullanıldığı ikili çevrim teknolojisinin gelişimi sayesinde elektrik üretimi veya kombine ısı ve güç için kullanılmaktadır.",
    title: "Jeotermal Enerji",
  },
  {
    description: "Haberler",
    iframe: "https://www.trthaber.com/etiket/hidroelektrik-santralleri/",
    image: "/images/sustainable/Group-1.png",
    text: "Hidroelektrik enerjisi de rüzgar ve güneş enerjisi gibi yenilebilir bir enerji kaynağıdır. Diğer yenilenebilir enerji kaynakları içerisinde en köklü teknolojiye sahip olan enerji türü hidroelektriğe aittir. Suyun gücünden medeniyetin ilk dönemlerinden itibaren yararlanıldığı bilinmektedir. Su değirmenleri ve kayık sayesinde hidroelektrik enerjisinden insanlar istifade etmiştir. Özellikle 19. yüzyılda meydana gelen sanayi devrimine kadar su değirmenlerinden elde edilen güç sayesinde pek çok üretim faaliyeti yerine getirilmiştir. Ancak teknolojik yetersizlikler nedeniyle üretilen enerjinin depolanamaması ve endüstrileşmeye yetersiz gelmesi insanları kömür başta olmak üzere diğer fosil yakıtlara yöneltmiştir. Hidrolik enerji ile modern tarım, sulama, turizm, spor aktiviteleri gibi çeşitli alanlarda fayda elde edilir. Ancak hepsinden önemlisi elektrik üretilmesidir. Günümüzde su türbinleri sayesinde suyun gücünden kinetik enerji elde edilir. İlk hidroelektrik santral 1882 yılında Amerika’da kurulmuştur. 2016 yılında ise dünyanın en büyük çaplı hidroelektrik santrali Çin’de kurulmuştur. Bu santralin 22.400 MW üretim kapasitesine sahip olduğu bilinmektedir.",
    title: "Hidroelektrik Santralleri Enerjisi",
  },
];
