import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Loader from "./components/Loader";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import LeaderSpeaks from "./components/LeaderSpeaks";
import AboutSection from "./components/AboutSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import { WordPressService } from "./services/wordpress";
import { Leader } from "./types/wordpress";

interface SliderImage {
  id: number;
  image: string;
  alt: string;
}

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  caption?: string;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sliderImages, setSliderImages] = useState<SliderImage[]>([]);
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [aboutContent, setAboutContent] = useState({
    title: "Vanjari World",
    content:
      "<p>Vanjari Community web VanjariWorld.com is owned and operated by 'Ek Diwas Samajasathi (EDS) Foundation'. Ek Diwas Samajasathi Foundation is founded by group of Visionary Officers and Professionals willing to contribute by giving & sharing Time, Talent and or Treasure for the Social Welfare and Development of the Community.</p><p>Our Vision is to ensure best network amongst all strata of community and to achieve Socio-Economic Growth of the underprivileged community members by uniting Officers, Professionals, Social Workers, Students, Women etc.</p>",
  });
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData] = await Promise.all([
          WordPressService.fetchPosts({ per_page: 10, _embed: true }),
        ]);

        const mockSlides: SliderImage[] = [
          {
            id: 1,
            image:
              "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
            alt: "Community gathering",
          },
          {
            id: 2,
            image:
              "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
            alt: "Community event",
          },
          {
            id: 3,
            image:
              "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1600",
            alt: "Community celebration",
          },
          {
            id: 4,
            image:
              "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=1600",
            alt: "Community members",
          },
        ];
        setSliderImages(mockSlides);

        const mockLeaders: Leader[] = [
          {
            id: 1,
            name: "Adv. (Dr.) Sudhakarrao Avhad",
            title: "President",
            image:
              "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
            description:
              "Even after 70 years of Independence, the Vanjari community remains...",
            excerpt:
              "Even after 70 years of Independence, the Vanjari community remains...",
          },
          {
            id: 2,
            name: "Kiran Gitte IAS",
            title: "IAS Officer",
            image:
              "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
            description:
              "माणसाला सामाजिक प्राणी (Social Animal) म्हटले जाते. एका मोगळीच क्षेत्रातील...",
            excerpt: "माणसाला सामाजिक प्राणी (Social Animal) म्हटले जाते...",
          },
          {
            id: 3,
            name: "Bharat Andhale IRS",
            title: "IRS Officer",
            image:
              "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
            description:
              "You may be very successful person in life, but without...",
            excerpt:
              "You may be very successful person in life, but without...",
          },
          {
            id: 4,
            name: "Ajay Munde",
            title: "Social Leader",
            image:
              "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
            description:
              "Individually we are just Drops, but together we can be...",
            excerpt:
              "Individually we are just Drops, but together we can be...",
          },
        ];
        setLeaders(mockLeaders);

        const mockGallery: GalleryImage[] = [
          {
            id: 1,
            url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "Event 1",
          },
          {
            id: 2,
            url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "Event 2",
          },
          {
            id: 3,
            url: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "Event 3",
          },
          {
            id: 4,
            url: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "Event 4",
          },
          {
            id: 5,
            url: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "Event 5",
          },
          {
            id: 6,
            url: "https://images.pexels.com/photos/3184288/pexels-photo-3184288.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "Event 6",
          },
          {
            id: 7,
            url: "https://images.pexels.com/photos/3184289/pexels-photo-3184289.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "Event 7",
          },
          {
            id: 8,
            url: "https://images.pexels.com/photos/3184290/pexels-photo-3184290.jpeg?auto=compress&cs=tinysrgb&w=600",
            alt: "Event 8",
          },
        ];
        setGalleryImages(mockGallery);

        if (postsData.length > 0) {
          console.log("WordPress posts loaded:", postsData.length);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSlider slides={sliderImages} />
      <LeaderSpeaks leaders={leaders} />
      <AboutSection title={aboutContent.title} content={aboutContent.content} />
      <Gallery images={galleryImages} />
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all z-40"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
