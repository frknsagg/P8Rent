interface PersonData {
    id: number;
    name: string;
    about: string;
    image: string;
    linkedin: string;
  }
  
  const peopleData: PersonData[] = [
    {
      id: 1,
      name: 'Aslı Beyhan',
      about: 'Software Developer - İstanbul',
      image:"image/Asli.jpeg",
      linkedin:'https://www.linkedin.com/in/asl%C4%B1-beyhan-849b2a1a3/'
    },
    {
      id: 2,
      name: 'Abdulkadir Elsıkma',
      about: 'Junior Java & React Fullstack Developer - Çankaya, Ankara',
      image:'image/Abdulkadir.jpg',
      linkedin:'https://www.linkedin.com/in/abdulkadir-els%C4%B1kma/'
    },
    {
      id: 3,
      name: 'Mehmet Kaya',
      about: ' Java & React Fullstack & Game Developer - Burdur',
      image:'image/Furkan.png',
      linkedin:'https://www.linkedin.com/in/frknsagg/'
    },
    {
      id: 4,
      name: 'Bayram Ulutaş',
      about: ' Junior Java & React Fullstack Developer-Malatya',
      image:'image/Bayram.jpg',
      linkedin:'https://www.linkedin.com/in/bayramuluta%C5%9F/'
    },
  ];
  export default peopleData;