// productos.js
const PRODUCTOS = [
  /*
    
      {
        id: 1,
        nombre: '',
        precio: 1,
        categoria: '',
        imagen: '',
        link: ''
      }
    
    */
  {
    id: 0,
    nombre: "Yamaha XTZ 250",
    precio: 28000000,
    categoria: "unknown",
    imagen:
      "https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/xtz250_negra.png",
    link: "https://www.incolmotos-yamaha.com.co/vehiculo/xtz250a/2266/",
  },
  {
    id: 1,
    nombre: "iPhone 17 Pro Max (1TB)",
    precio: 9500000,
    categoria: "apple",
    imagen:
      "https://mac-center.com/cdn/shop/files/IMG-18067860_m_jpeg_1_d4944749-fbd5-40f6-8768-b7fe47ec128e.jpg?v=1757469508&width=823",
    link: "https://mac-center.com/products/iphone-17-pro-mfyv4lz-a",
  },
  {
    id: 2,
    nombre: "Airpods Pro 3",
    precio: 1000000,
    categoria: "apple",
    imagen:
      "https://mac-center.com/cdn/shop/files/IMG-18067428_m_jpeg_1.jpg?v=1757469538",
    link: "https://mac-center.com/products/airpods-pro-3-mfhp4am-a",
  },
  {
    id: 3,
    nombre: "Setup gamer completo",
    precio: 12000000,
    categoria: "unknown",
    imagen: "https://m.media-amazon.com/images/I/81PZzxMN3JL._AC_SL1500_.jpg",
    link: "https://www.amazon.com/dp/B0DHXSNQB2/ref=sspa_dk_detail_3?pf_rd_p=af2be12d-373e-4c68-a933-d40df60554fe&pf_rd_r=ED3WHFCMT988YTF3N40F&pd_rd_wg=BaBLy&pd_rd_w=CoxIt&content-id=amzn1.sym.af2be12d-373e-4c68-a933-d40df60554fe&pd_rd_r=ff543d37-7d17-40f5-901b-628f6f070fcb&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1",
  },
  {
    id: 4,
    nombre: "Barra de sonido JBL Soundbar 500 BAR 500 negra 2406-2474MHz",
    precio: 2000000,
    categoria: "mercadolibre",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_830941-MLU76788938716_062024-F.webp",
    link: "https://www.mercadolibre.com.co/barra-de-sonido-jbl-soundbar-500-bar-500-negra-2406-2474mhz/p/MCO37713590?pdp_filters=price%3A600000-*#polycard_client=search-desktop&search_layout=grid&position=3&type=product&tracking_id=30cc029a-393b-46b3-815f-41e396fc3deb&wid=MCO1773424141&sid=search",
  },
  {
    id: 5,
    nombre: "Reloj Tissot Le Locle Powermatic 80",
    precio: 4670000,
    categoria: "glauser",
    imagen:
      "https://glauser.vteximg.com.br/arquivos/ids/182190/T006.407.11.033.03.jpg?v=638418085948000000",
    link: "https://www.glauser.com.co/reloj-tissot-le-locle-powermatic-80-t0064071103303-t0064071103303/p",
  },
  {
    id: 6,
    nombre: "Gafas De Sol Sutro Lite Oakley Oo9463946313 Color Gris",
    precio: 776000,
    categoria: "mercadolibre",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_623752-MLA95665027449_102025-F.webp",
    link: "https://www.mercadolibre.com.co/p/MCO21466616?pdp_filters=item_id%3AMCO1426948541#polycard_client=cart_list&wid=MCO1426948541&sid=cart",
  },
  {
    id: 7,
    nombre:
      "Gafas De Sol Sutro Lite Oakley Oo9471 Hombre Originales Color Gris",
    precio: 972000,
    categoria: "mercadolibre",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_834753-MLA99987822809_112025-F.webp",
    link: "https://www.mercadolibre.com.co/gafas-de-sol-oakley-oo9471-hombre-originales-color-gris/p/MCO22593591?pdp_filters=item_id%3AMCO2162323552&quantity=2&offer_type=BEST_INSTALLMENTS",
  },
  {
    id: 8,
    nombre: "Nike Pegasus 42",
    precio: 800000,
    categoria: "nike",
    imagen:
      "https://nikeco.vtexassets.com/arquivos/ids/1023300-1600-auto?v=639110877752870000&width=1600&height=auto&aspect=true",
    link: "https://www.nike.com.co/nike-pegasus-42-calzado-de-correr-para-hombre-ib1873-001-tu6/p",
  },
  {
    id: 9,
    nombre: "Nike Structure 26",
    precio: 800000,
    categoria: "nike",
    imagen:
      "https://nikeco.vtexassets.com/arquivos/ids/1055138-1200-auto?v=639135964269930000&width=1200&height=auto&aspect=true",
    link: "https://www.nike.com.co/nike-structure-26-calzado-correr-hombre-hj1102-115-tu6/p",
  },
  {
    id: 10,
    nombre: "Nike Structure Plus",
    precio: 950000,
    categoria: "nike",
    imagen:
      "https://nikeco.vtexassets.com/arquivos/ids/949079-1200-auto?v=639029669669000000&width=1200&height=auto&aspect=true",
    link: "https://www.nike.com.co/nike-structure-plus-hq3048-001-tp6/p?skuId=82357",
  },
  {
    id: 11,
    nombre: "Closet (Relleno)",
    precio: 12000000,
    categoria: "unknown",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_736103-MCO97519707232_112025-F.webp",
    link: "https://www.mercadolibre.com.co/closet-siruela-200-milan-y-wengue--gran-almacenamiento/up/MCOU3558177998#polycard_client=recommendations_pdp-v2p&reco_backend=ranker_retrieval_system_org&reco_model=coldstart_low_exposition&reco_client=pdp-v2p&reco_item_pos=1&reco_backend_type=low_level&reco_id=02be40ff-9a56-45fb-a385-ef9bdd779f1c&wid=MCO1727581517&sid=recos",
  },
];
