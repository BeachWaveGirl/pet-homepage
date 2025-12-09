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

// Dog breeds (57 available)
const dogBreeds: PetBreed[] = [
  { id: "akita", name: "Akita", image: "/assets/pets/dog/akita.png" },
  { id: "australian-shepherd", name: "Australian Shepherd", image: "/assets/pets/dog/australian-shepherd.png" },
  { id: "basset-hound", name: "Basset Hound", image: "/assets/pets/dog/basset-hound.png" },
  { id: "beagle", name: "Beagle", image: "/assets/pets/dog/beagle.png" },
  { id: "bernese-mountain", name: "Bernese Mountain Dog", image: "/assets/pets/dog/bernese-mountain.png" },
  { id: "bichon-frise", name: "Bichon Frise", image: "/assets/pets/dog/bichon-frise.png" },
  { id: "border-collie", name: "Border Collie", image: "/assets/pets/dog/border-collie.png" },
  { id: "boston-terrier", name: "Boston Terrier", image: "/assets/pets/dog/boston-terrier.png" },
  { id: "boxer", name: "Boxer", image: "/assets/pets/dog/boxer.png" },
  { id: "brittany", name: "Brittany", image: "/assets/pets/dog/brittany.png" },
  { id: "cavalier-king-charles", name: "Cavalier King Charles", image: "/assets/pets/dog/cavalier-king-charles.png" },
  { id: "dachshund", name: "Dachshund", image: "/assets/pets/dog/dachshund.png" },
  { id: "dalmatian", name: "Dalmatian", image: "/assets/pets/dog/dalmatian.png" },
  { id: "doberman", name: "Doberman", image: "/assets/pets/dog/doberman.png" },
  { id: "english-setter", name: "English Setter", image: "/assets/pets/dog/english-setter.png" },
  { id: "german-shepherd", name: "German Shepherd", image: "/assets/pets/dog/german-shepherd.png" },
  { id: "golden-retriever", name: "Golden Retriever", image: "/assets/pets/dog/golden-retriever.png" },
  { id: "great-dane", name: "Great Dane", image: "/assets/pets/dog/great-dane.png" },
  { id: "greyhound", name: "Greyhound", image: "/assets/pets/dog/greyhound.png" },
  { id: "havanese", name: "Havanese", image: "/assets/pets/dog/havanese.png" },
  { id: "husky", name: "Husky", image: "/assets/pets/dog/husky.png" },
  { id: "irish-setter", name: "Irish Setter", image: "/assets/pets/dog/irish-setter.png" },
  { id: "jack-russell", name: "Jack Russell", image: "/assets/pets/dog/jack-russell.png" },
  { id: "labrador-black", name: "Labrador (Black)", image: "/assets/pets/dog/labrador-black.png" },
  { id: "labrador-chocolate", name: "Labrador (Chocolate)", image: "/assets/pets/dog/labrador-chocolate.png" },
  { id: "labrador-yellow", name: "Labrador (Yellow)", image: "/assets/pets/dog/labrador-yellow.png" },
  { id: "lhasa-apso", name: "Lhasa Apso", image: "/assets/pets/dog/lhasa-apso.png" },
  { id: "maltese", name: "Maltese", image: "/assets/pets/dog/maltese.png" },
  { id: "mastiff", name: "Mastiff", image: "/assets/pets/dog/mastiff.png" },
  { id: "miniature-pinscher", name: "Miniature Pinscher", image: "/assets/pets/dog/miniature-pinscher.png" },
  { id: "miniature-schnauzer", name: "Miniature Schnauzer", image: "/assets/pets/dog/miniature-schnauzer.png" },
  { id: "newfoundland", name: "Newfoundland", image: "/assets/pets/dog/newfoundland.png" },
  { id: "old-english-sheepdog", name: "Old English Sheepdog", image: "/assets/pets/dog/old-english-sheepdog.png" },
  { id: "papillon", name: "Papillon", image: "/assets/pets/dog/papillon.png" },
  { id: "pekingese", name: "Pekingese", image: "/assets/pets/dog/pekingese.png" },
  { id: "pitbull", name: "Pitbull", image: "/assets/pets/dog/pitbull.png" },
  { id: "pointer", name: "Pointer", image: "/assets/pets/dog/pointer.png" },
  { id: "pomeranian", name: "Pomeranian", image: "/assets/pets/dog/pomeranian.png" },
  { id: "poodle-standard", name: "Poodle (Standard)", image: "/assets/pets/dog/poodle-standard.png" },
  { id: "poodle-toy", name: "Poodle (Toy)", image: "/assets/pets/dog/poodle-toy.png" },
  { id: "pug", name: "Pug", image: "/assets/pets/dog/pug.png" },
  { id: "rhodesian-ridgeback", name: "Rhodesian Ridgeback", image: "/assets/pets/dog/rhodesian-ridgeback.png" },
  { id: "rottweiler", name: "Rottweiler", image: "/assets/pets/dog/rottweiler.png" },
  { id: "saint-bernard", name: "Saint Bernard", image: "/assets/pets/dog/saint-bernard.png" },
  { id: "samoyed", name: "Samoyed", image: "/assets/pets/dog/samoyed.png" },
  { id: "scottish-terrier", name: "Scottish Terrier", image: "/assets/pets/dog/scottish-terrier.png" },
  { id: "shar-pei", name: "Shar Pei", image: "/assets/pets/dog/shar-pei.png" },
  { id: "shiba-inu", name: "Shiba Inu", image: "/assets/pets/dog/shiba-inu.png" },
  { id: "shih-tzu", name: "Shih Tzu", image: "/assets/pets/dog/shih-tzu.png" },
  { id: "springer-spaniel", name: "Springer Spaniel", image: "/assets/pets/dog/springer-spaniel.png" },
  { id: "vizsla", name: "Vizsla", image: "/assets/pets/dog/vizsla.png" },
  { id: "weimaraner", name: "Weimaraner", image: "/assets/pets/dog/weimaraner.png" },
  { id: "west-highland", name: "West Highland Terrier", image: "/assets/pets/dog/west-highland.png" },
  { id: "whippet", name: "Whippet", image: "/assets/pets/dog/whippet.png" },
  { id: "yorkshire-terrier", name: "Yorkshire Terrier", image: "/assets/pets/dog/yorkshire-terrier.png" },
];

// Cat breeds (11)
const catBreeds: PetBreed[] = [
  { id: "black-shorthair", name: "Black Shorthair", image: "/assets/pets/cat/black-shorthair.png" },
  { id: "calico-1", name: "Calico", image: "/assets/pets/cat/calico-1.png" },
  { id: "calico-2", name: "Calico (Fluffy)", image: "/assets/pets/cat/calico-2.png" },
  { id: "ginger-1", name: "Ginger", image: "/assets/pets/cat/ginger-1.png" },
  { id: "ginger-2", name: "Ginger (Fluffy)", image: "/assets/pets/cat/ginger-2.png" },
  { id: "gray-tabby-1", name: "Gray Tabby", image: "/assets/pets/cat/gray-tabby-1.png" },
  { id: "gray-tabby-2", name: "Gray Tabby (Striped)", image: "/assets/pets/cat/gray-tabby-2.png" },
  { id: "gray-tabby-3", name: "Gray Tabby (Silver)", image: "/assets/pets/cat/gray-tabby-3.png" },
  { id: "siamese-1", name: "Siamese", image: "/assets/pets/cat/siamese-1.png" },
  { id: "siamese-2", name: "Siamese (Seal Point)", image: "/assets/pets/cat/siamese-2.png" },
  { id: "white-longhair", name: "White Longhair", image: "/assets/pets/cat/white-longhair.png" },
];

// Parrot breeds (6)
const parrotBreeds: PetBreed[] = [
  { id: "african-grey", name: "African Grey", image: "/assets/pets/parrot/african-grey.png" },
  { id: "budgie", name: "Budgie", image: "/assets/pets/parrot/budgie.png" },
  { id: "cockatiel", name: "Cockatiel", image: "/assets/pets/parrot/cockatiel.png" },
  { id: "cockatoo", name: "Cockatoo", image: "/assets/pets/parrot/cockatoo.png" },
  { id: "lovebird", name: "Lovebird", image: "/assets/pets/parrot/lovebird.png" },
  { id: "macaw", name: "Macaw", image: "/assets/pets/parrot/macaw.png" },
];

// Rabbit breeds (5)
const rabbitBreeds: PetBreed[] = [
  { id: "dutch", name: "Dutch", image: "/assets/pets/rabbit/dutch.png" },
  { id: "holland-lop", name: "Holland Lop", image: "/assets/pets/rabbit/holland-lop.png" },
  { id: "lionhead", name: "Lionhead", image: "/assets/pets/rabbit/lionhead.png" },
  { id: "mini-rex", name: "Mini Rex", image: "/assets/pets/rabbit/mini-rex.png" },
  { id: "netherland-dwarf", name: "Netherland Dwarf", image: "/assets/pets/rabbit/netherland-dwarf.png" },
];

// Hamster breeds (5)
const hamsterBreeds: PetBreed[] = [
  { id: "chinese", name: "Chinese", image: "/assets/pets/hamster/chinese.png" },
  { id: "dwarf", name: "Dwarf", image: "/assets/pets/hamster/dwarf.png" },
  { id: "roborovski", name: "Roborovski", image: "/assets/pets/hamster/roborovski.png" },
  { id: "syrian", name: "Syrian", image: "/assets/pets/hamster/syrian.png" },
  { id: "teddy-bear", name: "Teddy Bear", image: "/assets/pets/hamster/teddy-bear.png" },
];

// Turtle breeds (4)
const turtleBreeds: PetBreed[] = [
  { id: "box-turtle", name: "Box Turtle", image: "/assets/pets/turtle/box-turtle.png" },
  { id: "painted-turtle", name: "Painted Turtle", image: "/assets/pets/turtle/painted-turtle.png" },
  { id: "red-eared-slider", name: "Red-Eared Slider", image: "/assets/pets/turtle/red-eared-slider.png" },
  { id: "russian-tortoise", name: "Russian Tortoise", image: "/assets/pets/turtle/russian-tortoise.png" },
];

// Fish breeds (7)
const fishBreeds: PetBreed[] = [
  { id: "angelfish", name: "Angelfish", image: "/assets/pets/fish/angelfish.png" },
  { id: "betta", name: "Betta", image: "/assets/pets/fish/betta.png" },
  { id: "clownfish", name: "Clownfish", image: "/assets/pets/fish/clownfish.png" },
  { id: "goldfish", name: "Goldfish", image: "/assets/pets/fish/goldfish.png" },
  { id: "guppy", name: "Guppy", image: "/assets/pets/fish/guppy.png" },
  { id: "koi", name: "Koi", image: "/assets/pets/fish/koi.png" },
  { id: "neon-tetra", name: "Neon Tetra", image: "/assets/pets/fish/neon-tetra.png" },
];

// Lizard breeds (5)
const lizardBreeds: PetBreed[] = [
  { id: "bearded-dragon", name: "Bearded Dragon", image: "/assets/pets/lizard/bearded-dragon.png" },
  { id: "chameleon", name: "Chameleon", image: "/assets/pets/lizard/chameleon.png" },
  { id: "crested-gecko", name: "Crested Gecko", image: "/assets/pets/lizard/crested-gecko.png" },
  { id: "iguana", name: "Iguana", image: "/assets/pets/lizard/iguana.png" },
  { id: "leopard-gecko", name: "Leopard Gecko", image: "/assets/pets/lizard/leopard-gecko.png" },
];

// Horse breeds (5)
const horseBreeds: PetBreed[] = [
  { id: "arabian", name: "Arabian", image: "/assets/pets/horse/arabian.png" },
  { id: "mustang", name: "Mustang", image: "/assets/pets/horse/mustang.png" },
  { id: "palomino", name: "Palomino", image: "/assets/pets/horse/palomino.png" },
  { id: "quarter-horse", name: "Quarter Horse", image: "/assets/pets/horse/quarter-horse.png" },
  { id: "thoroughbred", name: "Thoroughbred", image: "/assets/pets/horse/thoroughbred.png" },
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
