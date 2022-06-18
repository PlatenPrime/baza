import { toolsLinks } from "./data/Links/toolsLinks";


const listLinks = toolsLinks[category];

const listGallery = listLinks.map((item) =>

	<GalleryCard key={item.id} index={item.id} category={category} />

);

{ listGallery };