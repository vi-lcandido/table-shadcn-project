type Person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};

export const people: Person[] = [
  {
    id: 1,
    first_name: "Sharline",
    last_name: "Berrisford",
    email: "sberrisford0@slate.com",
    gender: "Female",
  },
  {
    id: 2,
    first_name: "Aland",
    last_name: "Escalera",
    email: "aescalera1@cmu.edu",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Valdemar",
    last_name: "Fontelles",
    email: "vfontelles2@ovh.net",
    gender: "Male",
  },
  {
    id: 4,
    first_name: "Lyn",
    last_name: "Underhill",
    email: "lunderhill3@istockphoto.com",
    gender: "Female",
  },
  {
    id: 5,
    first_name: "Ursuline",
    last_name: "Peetermann",
    email: "upeetermann4@howstuffworks.com",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "Kathrine",
    last_name: "Penbarthy",
    email: "kpenbarthy5@cmu.edu",
    gender: "Female",
  },
  {
    id: 7,
    first_name: "Rhiamon",
    last_name: "Maddaford",
    email: "rmaddaford6@adobe.com",
    gender: "Female",
  },
  {
    id: 8,
    first_name: "Olly",
    last_name: "Jalland",
    email: "ojalland7@toplist.cz",
    gender: "Male",
  },
  {
    id: 9,
    first_name: "Connor",
    last_name: "Britnell",
    email: "cbritnell8@shutterfly.com",
    gender: "Male",
  },
  {
    id: 10,
    first_name: "Arabella",
    last_name: "Hawkey",
    email: "ahawkey9@adobe.com",
    gender: "Agender",
  },
];

// typeof data retorna o tipo da variável data = array com os fields já inferidos pelo TS

//typeof para inferir tipos dinamicamente a partir de variáveis existentes
//[number] notação de indexação para acessar dentro do array pelo índice
// export type Person = (typeof dataPeople)[number];
