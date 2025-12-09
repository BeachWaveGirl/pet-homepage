// Pet types and their breeds data

export interface PetBreed {
  id: string;
  name: string;
  image: string;
}

export interface PetType {
  id: string;
  name: string;
  image: string;
  breeds: PetBreed[];
}

// Dog breeds with placeholder images - in production these would be real watercolor images
const dogBreeds: PetBreed[] = [
  { id: "golden-retriever-light", name: "Golden Retriever (Light)", image: "/assets/dog-representative.png" },
  { id: "golden-retriever-dark", name: "Golden Retriever (Dark)", image: "/assets/dog-representative.png" },
  { id: "golden-retriever-red", name: "Golden Retriever (Red)", image: "/assets/dog-representative.png" },
  { id: "labrador-yellow", name: "Labrador (Yellow)", image: "/assets/dog-representative.png" },
  { id: "labrador-chocolate", name: "Labrador (Chocolate)", image: "/assets/dog-representative.png" },
  { id: "labrador-black", name: "Labrador (Black)", image: "/assets/dog-representative.png" },
  { id: "german-shepherd", name: "German Shepherd", image: "/assets/dog-representative.png" },
  { id: "french-bulldog", name: "French Bulldog", image: "/assets/dog-representative.png" },
  { id: "bulldog", name: "Bulldog", image: "/assets/dog-representative.png" },
  { id: "poodle-white", name: "Poodle (White)", image: "/assets/dog-representative.png" },
  { id: "poodle-black", name: "Poodle (Black)", image: "/assets/dog-representative.png" },
  { id: "poodle-apricot", name: "Poodle (Apricot)", image: "/assets/dog-representative.png" },
  { id: "beagle", name: "Beagle", image: "/assets/dog-representative.png" },
  { id: "rottweiler", name: "Rottweiler", image: "/assets/dog-representative.png" },
  { id: "yorkshire-terrier", name: "Yorkshire Terrier", image: "/assets/dog-representative.png" },
  { id: "boxer", name: "Boxer", image: "/assets/dog-representative.png" },
  { id: "dachshund", name: "Dachshund", image: "/assets/dog-representative.png" },
  { id: "siberian-husky", name: "Siberian Husky", image: "/assets/dog-representative.png" },
  { id: "great-dane", name: "Great Dane", image: "/assets/dog-representative.png" },
  { id: "doberman", name: "Doberman", image: "/assets/dog-representative.png" },
  { id: "shih-tzu", name: "Shih Tzu", image: "/assets/dog-representative.png" },
  { id: "miniature-schnauzer", name: "Miniature Schnauzer", image: "/assets/dog-representative.png" },
  { id: "cavalier-king-charles", name: "Cavalier King Charles", image: "/assets/dog-representative.png" },
  { id: "pomeranian", name: "Pomeranian", image: "/assets/dog-representative.png" },
  { id: "boston-terrier", name: "Boston Terrier", image: "/assets/dog-representative.png" },
  { id: "havanese", name: "Havanese", image: "/assets/dog-representative.png" },
  { id: "shetland-sheepdog", name: "Shetland Sheepdog", image: "/assets/dog-representative.png" },
  { id: "brittany", name: "Brittany", image: "/assets/dog-representative.png" },
  { id: "english-springer-spaniel", name: "English Springer Spaniel", image: "/assets/dog-representative.png" },
  { id: "bernese-mountain-dog", name: "Bernese Mountain Dog", image: "/assets/dog-representative.png" },
  { id: "cocker-spaniel", name: "Cocker Spaniel", image: "/assets/dog-representative.png" },
  { id: "border-collie", name: "Border Collie", image: "/assets/dog-representative.png" },
  { id: "vizsla", name: "Vizsla", image: "/assets/dog-representative.png" },
  { id: "basset-hound", name: "Basset Hound", image: "/assets/dog-representative.png" },
  { id: "mastiff", name: "Mastiff", image: "/assets/dog-representative.png" },
  { id: "belgian-malinois", name: "Belgian Malinois", image: "/assets/dog-representative.png" },
  { id: "chihuahua", name: "Chihuahua", image: "/assets/dog-representative.png" },
  { id: "maltese", name: "Maltese", image: "/assets/dog-representative.png" },
  { id: "weimaraner", name: "Weimaraner", image: "/assets/dog-representative.png" },
  { id: "collie", name: "Collie", image: "/assets/dog-representative.png" },
  { id: "newfoundland", name: "Newfoundland", image: "/assets/dog-representative.png" },
  { id: "rhodesian-ridgeback", name: "Rhodesian Ridgeback", image: "/assets/dog-representative.png" },
  { id: "shiba-inu", name: "Shiba Inu", image: "/assets/dog-representative.png" },
  { id: "west-highland-terrier", name: "West Highland Terrier", image: "/assets/dog-representative.png" },
  { id: "bichon-frise", name: "Bichon Frise", image: "/assets/dog-representative.png" },
  { id: "akita", name: "Akita", image: "/assets/dog-representative.png" },
  { id: "bloodhound", name: "Bloodhound", image: "/assets/dog-representative.png" },
  { id: "st-bernard", name: "St. Bernard", image: "/assets/dog-representative.png" },
  { id: "papillon", name: "Papillon", image: "/assets/dog-representative.png" },
  { id: "australian-cattle-dog", name: "Australian Cattle Dog", image: "/assets/dog-representative.png" },
  { id: "airedale-terrier", name: "Airedale Terrier", image: "/assets/dog-representative.png" },
  { id: "samoyed", name: "Samoyed", image: "/assets/dog-representative.png" },
  { id: "scottish-terrier", name: "Scottish Terrier", image: "/assets/dog-representative.png" },
  { id: "soft-coated-wheaten", name: "Soft Coated Wheaten", image: "/assets/dog-representative.png" },
  { id: "alaskan-malamute", name: "Alaskan Malamute", image: "/assets/dog-representative.png" },
  { id: "whippet", name: "Whippet", image: "/assets/dog-representative.png" },
  { id: "chinese-shar-pei", name: "Chinese Shar-Pei", image: "/assets/dog-representative.png" },
  { id: "dalmatian", name: "Dalmatian", image: "/assets/dog-representative.png" },
  { id: "irish-setter", name: "Irish Setter", image: "/assets/dog-representative.png" },
  { id: "pug", name: "Pug", image: "/assets/dog-representative.png" },
  { id: "jack-russell-terrier", name: "Jack Russell Terrier", image: "/assets/dog-representative.png" },
  { id: "corgi", name: "Corgi", image: "/assets/dog-representative.png" },
  { id: "australian-shepherd", name: "Australian Shepherd", image: "/assets/dog-representative.png" },
  { id: "english-setter", name: "English Setter", image: "/assets/dog-representative.png" },
  { id: "lhasa-apso", name: "Lhasa Apso", image: "/assets/dog-representative.png" },
  { id: "bull-terrier", name: "Bull Terrier", image: "/assets/dog-representative.png" },
];

// Cat breeds
const catBreeds: PetBreed[] = [
  { id: "persian-white", name: "Persian (White)", image: "/assets/cat-representative.png" },
  { id: "persian-cream", name: "Persian (Cream)", image: "/assets/cat-representative.png" },
  { id: "persian-gray", name: "Persian (Gray)", image: "/assets/cat-representative.png" },
  { id: "maine-coon", name: "Maine Coon", image: "/assets/cat-representative.png" },
  { id: "ragdoll", name: "Ragdoll", image: "/assets/cat-representative.png" },
  { id: "british-shorthair", name: "British Shorthair", image: "/assets/cat-representative.png" },
  { id: "siamese", name: "Siamese", image: "/assets/cat-representative.png" },
  { id: "abyssinian", name: "Abyssinian", image: "/assets/cat-representative.png" },
  { id: "bengal", name: "Bengal", image: "/assets/cat-representative.png" },
  { id: "birman", name: "Birman", image: "/assets/cat-representative.png" },
  { id: "oriental-shorthair", name: "Oriental Shorthair", image: "/assets/cat-representative.png" },
  { id: "sphynx", name: "Sphynx", image: "/assets/cat-representative.png" },
  { id: "devon-rex", name: "Devon Rex", image: "/assets/cat-representative.png" },
  { id: "himalayan", name: "Himalayan", image: "/assets/cat-representative.png" },
  { id: "american-shorthair", name: "American Shorthair", image: "/assets/cat-representative.png" },
  { id: "scottish-fold", name: "Scottish Fold", image: "/assets/cat-representative.png" },
  { id: "norwegian-forest", name: "Norwegian Forest", image: "/assets/cat-representative.png" },
  { id: "russian-blue", name: "Russian Blue", image: "/assets/cat-representative.png" },
  { id: "exotic-shorthair", name: "Exotic Shorthair", image: "/assets/cat-representative.png" },
  { id: "balinese", name: "Balinese", image: "/assets/cat-representative.png" },
  { id: "burmese", name: "Burmese", image: "/assets/cat-representative.png" },
  { id: "tonkinese", name: "Tonkinese", image: "/assets/cat-representative.png" },
  { id: "turkish-angora", name: "Turkish Angora", image: "/assets/cat-representative.png" },
  { id: "chartreux", name: "Chartreux", image: "/assets/cat-representative.png" },
  { id: "manx", name: "Manx", image: "/assets/cat-representative.png" },
  { id: "somali", name: "Somali", image: "/assets/cat-representative.png" },
  { id: "singapura", name: "Singapura", image: "/assets/cat-representative.png" },
  { id: "cornish-rex", name: "Cornish Rex", image: "/assets/cat-representative.png" },
  { id: "tabby-orange", name: "Tabby (Orange)", image: "/assets/cat-representative.png" },
  { id: "tabby-gray", name: "Tabby (Gray)", image: "/assets/cat-representative.png" },
  { id: "tuxedo", name: "Tuxedo", image: "/assets/cat-representative.png" },
  { id: "calico", name: "Calico", image: "/assets/cat-representative.png" },
  { id: "black-cat", name: "Black Cat", image: "/assets/cat-representative.png" },
  { id: "white-cat", name: "White Cat", image: "/assets/cat-representative.png" },
];

// Rabbit breeds
const rabbitBreeds: PetBreed[] = [
  { id: "white-lop", name: "White Lop", image: "/assets/white-lop.png" },
  { id: "holland-lop", name: "Holland Lop", image: "/assets/rabbit-representative.png" },
  { id: "mini-lop", name: "Mini Lop", image: "/assets/rabbit-representative.png" },
  { id: "netherland-dwarf", name: "Netherland Dwarf", image: "/assets/rabbit-representative.png" },
  { id: "flemish-giant", name: "Flemish Giant", image: "/assets/rabbit-representative.png" },
  { id: "rex", name: "Rex", image: "/assets/rabbit-representative.png" },
  { id: "lionhead", name: "Lionhead", image: "/assets/rabbit-representative.png" },
  { id: "english-angora", name: "English Angora", image: "/assets/rabbit-representative.png" },
  { id: "dutch", name: "Dutch", image: "/assets/rabbit-representative.png" },
  { id: "mini-rex", name: "Mini Rex", image: "/assets/rabbit-representative.png" },
];

// Parrot breeds
const parrotBreeds: PetBreed[] = [
  { id: "macaw", name: "Macaw", image: "/assets/parrot-representative.png" },
  { id: "african-grey", name: "African Grey", image: "/assets/parrot-representative.png" },
  { id: "cockatiel", name: "Cockatiel", image: "/assets/parrot-representative.png" },
  { id: "budgerigar", name: "Budgerigar", image: "/assets/parrot-representative.png" },
  { id: "cockatoo", name: "Cockatoo", image: "/assets/parrot-representative.png" },
  { id: "amazon", name: "Amazon", image: "/assets/parrot-representative.png" },
  { id: "conure", name: "Conure", image: "/assets/parrot-representative.png" },
  { id: "lovebird", name: "Lovebird", image: "/assets/parrot-representative.png" },
  { id: "eclectus", name: "Eclectus", image: "/assets/parrot-representative.png" },
  { id: "parakeet", name: "Parakeet", image: "/assets/parrot-representative.png" },
];

// Simple pet types (no sub-breeds)
const hamsterBreeds: PetBreed[] = [
  { id: "syrian", name: "Syrian Hamster", image: "/assets/hamster-representative.png" },
  { id: "dwarf", name: "Dwarf Hamster", image: "/assets/hamster-representative.png" },
  { id: "roborovski", name: "Roborovski", image: "/assets/hamster-representative.png" },
  { id: "chinese", name: "Chinese Hamster", image: "/assets/hamster-representative.png" },
];

const turtleBreeds: PetBreed[] = [
  { id: "red-eared-slider", name: "Red-Eared Slider", image: "/assets/turtle-representative.png" },
  { id: "box-turtle", name: "Box Turtle", image: "/assets/turtle-representative.png" },
  { id: "painted-turtle", name: "Painted Turtle", image: "/assets/turtle-representative.png" },
  { id: "tortoise", name: "Tortoise", image: "/assets/turtle-representative.png" },
];

const fishBreeds: PetBreed[] = [
  { id: "goldfish", name: "Goldfish", image: "/assets/fish-representative.png" },
  { id: "betta", name: "Betta", image: "/assets/fish-representative.png" },
  { id: "koi", name: "Koi", image: "/assets/fish-representative.png" },
  { id: "guppy", name: "Guppy", image: "/assets/fish-representative.png" },
  { id: "angelfish", name: "Angelfish", image: "/assets/fish-representative.png" },
];

const lizardBreeds: PetBreed[] = [
  { id: "bearded-dragon", name: "Bearded Dragon", image: "/assets/lizard-representative.png" },
  { id: "leopard-gecko", name: "Leopard Gecko", image: "/assets/lizard-representative.png" },
  { id: "crested-gecko", name: "Crested Gecko", image: "/assets/lizard-representative.png" },
  { id: "iguana", name: "Iguana", image: "/assets/lizard-representative.png" },
  { id: "chameleon", name: "Chameleon", image: "/assets/lizard-representative.png" },
];

const horseBreeds: PetBreed[] = [
  { id: "arabian", name: "Arabian", image: "/assets/horse-representative.png" },
  { id: "thoroughbred", name: "Thoroughbred", image: "/assets/horse-representative.png" },
  { id: "quarter-horse", name: "Quarter Horse", image: "/assets/horse-representative.png" },
  { id: "clydesdale", name: "Clydesdale", image: "/assets/horse-representative.png" },
  { id: "appaloosa", name: "Appaloosa", image: "/assets/horse-representative.png" },
  { id: "paint-horse", name: "Paint Horse", image: "/assets/horse-representative.png" },
  { id: "morgan", name: "Morgan", image: "/assets/horse-representative.png" },
  { id: "mustang", name: "Mustang", image: "/assets/horse-representative.png" },
];

export const petTypes: PetType[] = [
  { id: "dog", name: "Dog", image: "/assets/dog-representative.png", breeds: dogBreeds },
  { id: "cat", name: "Cat", image: "/assets/cat-representative.png", breeds: catBreeds },
  { id: "parrot", name: "Parrot", image: "/assets/parrot-representative.png", breeds: parrotBreeds },
  { id: "rabbit", name: "Rabbit", image: "/assets/rabbit-representative.png", breeds: rabbitBreeds },
  { id: "hamster", name: "Hamster", image: "/assets/hamster-representative.png", breeds: hamsterBreeds },
  { id: "turtle", name: "Turtle", image: "/assets/turtle-representative.png", breeds: turtleBreeds },
  { id: "fish", name: "Fish", image: "/assets/fish-representative.png", breeds: fishBreeds },
  { id: "lizard", name: "Lizard", image: "/assets/lizard-representative.png", breeds: lizardBreeds },
  { id: "horse", name: "Horse", image: "/assets/horse-representative.png", breeds: horseBreeds },
];

export const getPetTypeById = (id: string): PetType | undefined => {
  return petTypes.find(p => p.id === id);
};

export const getBreedById = (petTypeId: string, breedId: string): PetBreed | undefined => {
  const petType = getPetTypeById(petTypeId);
  return petType?.breeds.find(b => b.id === breedId);
};
