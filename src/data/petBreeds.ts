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

// Dog breeds (67)
const dogBreeds: PetBreed[] = [
  { id: "akita", name: "Akita", image: "/assets/pets/dog/akita.png" },
  { id: "australian-shepherd", name: "Australian Shepherd", image: "/assets/pets/dog/australian-shepherd.png" },
  { id: "basset-hound", name: "Basset Hound", image: "/assets/pets/dog/basset-hound.png" },
  { id: "beagle", name: "Beagle", image: "/assets/pets/dog/beagle-1.png" },
  { id: "bernese-mountain-dog", name: "Bernese Mountain Dog", image: "/assets/pets/dog/bernese-mountain-dog.png" },
  { id: "bichon-frise", name: "Bichon Frise", image: "/assets/pets/dog/bichon-frise.png" },
  { id: "border-collie", name: "Border Collie", image: "/assets/pets/dog/border-collie.png" },
  { id: "boston-terrier", name: "Boston Terrier", image: "/assets/pets/dog/boston-terrier.png" },
  { id: "boxer", name: "Boxer", image: "/assets/pets/dog/boxer.png" },
  { id: "bull-terrier", name: "Bull Terrier", image: "/assets/pets/dog/bull-terrier.png" },
  { id: "bulldog", name: "Bulldog", image: "/assets/pets/dog/bulldog.png" },
  { id: "cane-corso", name: "Cane Corso", image: "/assets/pets/dog/cane-corso.png" },
  { id: "cavalier", name: "Cavalier King Charles", image: "/assets/pets/dog/cavalier.png" },
  { id: "chihuahua", name: "Chihuahua", image: "/assets/pets/dog/chihuahua.png" },
  { id: "chinese-crested", name: "Chinese Crested", image: "/assets/pets/dog/chinese-crested.png" },
  { id: "chow-chow", name: "Chow Chow", image: "/assets/pets/dog/chow-chow.png" },
  { id: "cocker-spaniel", name: "Cocker Spaniel", image: "/assets/pets/dog/cocker-spaniel.png" },
  { id: "corgi-1", name: "Corgi (Tan)", image: "/assets/pets/dog/corgi-1.png" },
  { id: "corgi-2", name: "Corgi (Red)", image: "/assets/pets/dog/corgi-2.png" },
  { id: "dachshund-1", name: "Dachshund (Brown)", image: "/assets/pets/dog/dachshund-1.png" },
  { id: "dachshund-2", name: "Dachshund (Black & Tan)", image: "/assets/pets/dog/dachshund-2.png" },
  { id: "dalmatian", name: "Dalmatian", image: "/assets/pets/dog/dalmatian.png" },
  { id: "doberman", name: "Doberman", image: "/assets/pets/dog/doberman.png" },
  { id: "english-setter", name: "English Setter", image: "/assets/pets/dog/english-setter.png" },
  { id: "french-bulldog", name: "French Bulldog", image: "/assets/pets/dog/french-bulldog-1.png" },
  { id: "german-shepherd-1", name: "German Shepherd (Classic)", image: "/assets/pets/dog/german-shepherd-1.png" },
  { id: "german-shepherd-2", name: "German Shepherd (Sable)", image: "/assets/pets/dog/german-shepherd-2.png" },
  { id: "golden-retriever-1", name: "Golden Retriever (Light)", image: "/assets/pets/dog/golden-retriever-1.png" },
  { id: "golden-retriever-2", name: "Golden Retriever (Dark)", image: "/assets/pets/dog/golden-retriever-2.png" },
  { id: "golden-retriever-3", name: "Golden Retriever (Cream)", image: "/assets/pets/dog/golden-retriever-3.png" },
  { id: "great-dane", name: "Great Dane", image: "/assets/pets/dog/great-dane.png" },
  { id: "greyhound", name: "Greyhound", image: "/assets/pets/dog/greyhound.png" },
  { id: "havanese", name: "Havanese", image: "/assets/pets/dog/havanese.png" },
  { id: "husky-1", name: "Husky (Gray)", image: "/assets/pets/dog/husky-1.png" },
  { id: "husky-2", name: "Husky (Red)", image: "/assets/pets/dog/husky-2.png" },
  { id: "irish-setter", name: "Irish Setter", image: "/assets/pets/dog/irish-setter.png" },
  { id: "italian-greyhound", name: "Italian Greyhound", image: "/assets/pets/dog/italian-greyhound.png" },
  { id: "keeshond", name: "Keeshond", image: "/assets/pets/dog/keeshond.png" },
  { id: "labrador-black", name: "Labrador (Black)", image: "/assets/pets/dog/labrador-black-3.png" },
  { id: "labrador-chocolate", name: "Labrador (Chocolate)", image: "/assets/pets/dog/labrador-chocolate-2.png" },
  { id: "labrador-yellow", name: "Labrador (Yellow)", image: "/assets/pets/dog/labrador-yellow-1.png" },
  { id: "leonberger", name: "Leonberger", image: "/assets/pets/dog/leonberger.png" },
  { id: "malamute", name: "Alaskan Malamute", image: "/assets/pets/dog/malamute.png" },
  { id: "maltese", name: "Maltese", image: "/assets/pets/dog/maltese.png" },
  { id: "newfoundland", name: "Newfoundland", image: "/assets/pets/dog/newfoundland.png" },
  { id: "old-english-sheepdog", name: "Old English Sheepdog", image: "/assets/pets/dog/old-english-sheepdog.png" },
  { id: "papillon", name: "Papillon", image: "/assets/pets/dog/papillon.png" },
  { id: "pekingese", name: "Pekingese", image: "/assets/pets/dog/pekingese.png" },
  { id: "pomeranian", name: "Pomeranian", image: "/assets/pets/dog/pomeranian.png" },
  { id: "poodle-1", name: "Poodle (White)", image: "/assets/pets/dog/poodle-1.png" },
  { id: "poodle-2", name: "Poodle (Apricot)", image: "/assets/pets/dog/poodle-2.png" },
  { id: "portuguese-water-dog", name: "Portuguese Water Dog", image: "/assets/pets/dog/portuguese-water-dog.png" },
  { id: "pug", name: "Pug", image: "/assets/pets/dog/pug.png" },
  { id: "rottweiler", name: "Rottweiler", image: "/assets/pets/dog/rottweiler.png" },
  { id: "saint-bernard", name: "Saint Bernard", image: "/assets/pets/dog/saint-bernard.png" },
  { id: "samoyed", name: "Samoyed", image: "/assets/pets/dog/samoyed.png" },
  { id: "schnauzer", name: "Schnauzer", image: "/assets/pets/dog/schnauzer.png" },
  { id: "shar-pei", name: "Shar Pei", image: "/assets/pets/dog/shar-pei.png" },
  { id: "shiba-inu-1", name: "Shiba Inu (Red)", image: "/assets/pets/dog/shiba-inu-1.png" },
  { id: "shiba-inu-2", name: "Shiba Inu (Sesame)", image: "/assets/pets/dog/shiba-inu-2.png" },
  { id: "shih-tzu", name: "Shih Tzu", image: "/assets/pets/dog/shih-tzu.png" },
  { id: "staffordshire-bull-terrier", name: "Staffordshire Bull Terrier", image: "/assets/pets/dog/staffordshire-bull-terrier.png" },
  { id: "vizsla", name: "Vizsla", image: "/assets/pets/dog/vizsla.png" },
  { id: "weimaraner", name: "Weimaraner", image: "/assets/pets/dog/weimaraner.png" },
  { id: "westie", name: "West Highland Terrier", image: "/assets/pets/dog/westie.png" },
  { id: "whippet", name: "Whippet", image: "/assets/pets/dog/whippet.png" },
  { id: "yorkie", name: "Yorkshire Terrier", image: "/assets/pets/dog/yorkie.png" },
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
  { id: "budgerigar", name: "Budgerigar", image: "/assets/pets/parrot/budgerigar.png" },
  { id: "cockatiel", name: "Cockatiel", image: "/assets/pets/parrot/cockatiel.png" },
  { id: "lovebird", name: "Lovebird", image: "/assets/pets/parrot/lovebird.png" },
  { id: "macaw-blue-gold", name: "Blue & Gold Macaw", image: "/assets/pets/parrot/macaw-blue-gold.png" },
  { id: "macaw-scarlet", name: "Scarlet Macaw", image: "/assets/pets/parrot/macaw-scarlet.png" },
];

// Rabbit breeds (5)
const rabbitBreeds: PetBreed[] = [
  { id: "dutch", name: "Dutch", image: "/assets/pets/rabbit/dutch.png" },
  { id: "flemish-giant", name: "Flemish Giant", image: "/assets/pets/rabbit/flemish-giant.png" },
  { id: "lionhead", name: "Lionhead", image: "/assets/pets/rabbit/lionhead.png" },
  { id: "rex", name: "Rex", image: "/assets/pets/rabbit/rex.png" },
  { id: "white-lop", name: "White Lop", image: "/assets/pets/rabbit/white-lop.png" },
];

// Hamster breeds (5)
const hamsterBreeds: PetBreed[] = [
  { id: "chinese", name: "Chinese", image: "/assets/pets/hamster/chinese.png" },
  { id: "dwarf-campbell", name: "Dwarf Campbell", image: "/assets/pets/hamster/dwarf-campbell.png" },
  { id: "roborovski", name: "Roborovski", image: "/assets/pets/hamster/roborovski.png" },
  { id: "syrian", name: "Syrian", image: "/assets/pets/hamster/syrian.png" },
  { id: "winter-white", name: "Winter White", image: "/assets/pets/hamster/winter-white.png" },
];

// Turtle breeds (4)
const turtleBreeds: PetBreed[] = [
  { id: "box-turtle", name: "Box Turtle", image: "/assets/pets/turtle/box-turtle.png" },
  { id: "painted-turtle", name: "Painted Turtle", image: "/assets/pets/turtle/painted-turtle.png" },
  { id: "red-eared-slider", name: "Red-Eared Slider", image: "/assets/pets/turtle/red-eared-slider.png" },
  { id: "sulcata", name: "Sulcata Tortoise", image: "/assets/pets/turtle/sulcata.png" },
];

// Fish breeds (7)
const fishBreeds: PetBreed[] = [
  { id: "angelfish", name: "Angelfish", image: "/assets/pets/fish/angelfish.png" },
  { id: "betta-halfmoon", name: "Betta (Halfmoon)", image: "/assets/pets/fish/betta-halfmoon.png" },
  { id: "betta-veiltail", name: "Betta (Veiltail)", image: "/assets/pets/fish/betta-veiltail.png" },
  { id: "goldfish-common", name: "Goldfish (Common)", image: "/assets/pets/fish/goldfish-common.png" },
  { id: "goldfish-ryukin", name: "Goldfish (Ryukin)", image: "/assets/pets/fish/goldfish-ryukin.png" },
  { id: "guppy", name: "Guppy", image: "/assets/pets/fish/guppy.png" },
  { id: "koi", name: "Koi", image: "/assets/pets/fish/koi.png" },
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
  { id: "bay", name: "Bay", image: "/assets/pets/horse/bay.png" },
  { id: "black", name: "Black", image: "/assets/pets/horse/black.png" },
  { id: "chestnut", name: "Chestnut", image: "/assets/pets/horse/chestnut.png" },
  { id: "grey", name: "Grey", image: "/assets/pets/horse/grey.png" },
  { id: "pinto", name: "Pinto", image: "/assets/pets/horse/pinto.png" },
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
