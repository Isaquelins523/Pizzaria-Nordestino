/** Pizzas do cardápio Nordestino */
export const PIZZAS = [
  { name: 'Mussarela', desc: 'Mussarela, tomate, azeitona e orégano' },
  { name: 'Bacon', desc: 'Mussarela, bacon, milho, tomate, azeitona e orégano' },
  { name: '6 Cobertas', desc: 'Mussarela, presunto, frango, bacon, cebola, milho, tomate, catupiry, azeitona e orégano' },
  { name: 'Calabresa', desc: 'Mussarela, calabresa, tomate, azeitona, milho e orégano' },
  { name: 'Presunto', desc: 'Mussarela, presunto, tomate, azeitona e orégano' },
  { name: 'Frango com catupiry', desc: 'Mussarela, frango, milho, catupiry, azeitona e orégano' },
  { name: 'Moda da casa', desc: 'Mussarela, presunto, bacon, catupiry, ovo, azeitona e orégano' },
  { name: 'Mista', desc: 'Mussarela, presunto, frango, calabresa, milho, azeitona e orégano' },
  { name: 'Nordestina', desc: 'Mussarela, carne de sol, cebola, catupiry, pimenta, calabresa, azeitona e orégano' },
  { name: 'Balacubana', desc: 'Mussarela, presunto, frango, bacon, cebola, azeitona e orégano' },
  { name: 'Portuguesa', desc: 'Mussarela, presunto, calabresa, ovo, cebola, milho, azeitona e orégano' },
  { name: 'Quatro queijos', desc: 'Mussarela, catupiry, queijo, provolone, gorgonzola, azeitona e orégano' },
  { name: 'Mexicana', desc: 'Mussarela, calabresa, bacon, milho, catupiry, pimenta, azeitona e orégano' },
] as const

/** Preços por tamanho (cardápio) */
export const PIZZA_PRICES = [
  { size: 'P', label: 'Pequena', price: 'R$ 30,00' },
  { size: 'M', label: 'Média', price: 'R$ 45,00' },
  { size: 'G', label: 'Grande', price: 'R$ 58,00' },
  { size: 'GG', label: 'Gigante', price: 'R$ 63,00' },
] as const
