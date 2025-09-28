"use client"

import {
  Search,
  ShoppingCart,
  Bell,
  Globe,
  User,
  ChevronDown,
  Clock,
  ArrowRight,
  Menu,
  Heart,
  Star,
  Filter,
  Grid3X3,
  List,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ShopeePage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    { name: "Moedas", icon: "👛", color: "bg-amber-200 border border-amber-400" },
    { name: "Prêmios", icon: "🏆️", color: "bg-yellow-200 border border-yellow-400" },
    { name: "Destaques", icon: "🔍", color: "bg-sky-200 border border-sky-400" },
    { name: "Frete Grátis", icon: "🚚", color: "bg-emerald-200 border border-emerald-400" },
    { name: "Cupons", icon: "🎟️", color: "bg-purple-200 border border-purple-400" },
    { name: "Lojas Oficiais", icon: "🏪", color: "bg-orange-200 border border-orange-400" },
    { name: "Mercado", icon: "🛍️", color: "bg-blue-200 border border-blue-400" },
    { name: "Doações", icon: "💌", color: "bg-red-200 border border-red-400" },
    { name: "Tecnologia", icon: "📱", color: "bg-slate-200 border border-slate-400" },
    { name: "Beleza", icon: "💅", color: "bg-pink-200 border border-pink-400" },
  ]

  const flashDeals = [
    {
      image: "/massage-gun-black.jpg",
      price: "R$33,98",
      originalPrice: "R$67,96",
      discount: "-50%",
      sold: "POPULAR",
      tag: "FRETE GRÁTIS",
      rating: 4.8,
      reviews: 1234,
    },
    {
      image: "/baby-formula-blue-can.jpg",
      price: "R$24,70",
      originalPrice: "R$49,40",
      discount: "-50%",
      sold: "10 ITENS VENDIDOS",
      tag: "FRETE GRÁTIS",
      rating: 4.6,
      reviews: 856,
    },
    {
      image: "/red-instant-noodles-pack.jpg",
      price: "R$98,91",
      originalPrice: "R$197,82",
      discount: "-50%",
      sold: "POPULAR",
      tag: "FRETE GRÁTIS",
      rating: 4.9,
      reviews: 2341,
    },
    {
      image: "/white-kitchen-appliance-blender.jpg",
      price: "R$59,80",
      originalPrice: "R$119,60",
      discount: "-50%",
      sold: "11 ITENS VENDIDOS",
      tag: "FRETE GRÁTIS",
      rating: 4.7,
      reviews: 567,
    },
    {
      image: "/drill-battery-tools-set.jpg",
      price: "R$109,08",
      originalPrice: "R$218,16",
      discount: "-50%",
      sold: "17 ITENS VENDIDOS",
      tag: "FRETE GRÁTIS",
      rating: 4.5,
      reviews: 789,
    },
    {
      image: "/gaming-controller-black-green.jpg",
      price: "R$88,99",
      originalPrice: "R$177,98",
      discount: "-50%",
      sold: "8 ITENS VENDIDOS",
      tag: "FRETE GRÁTIS",
      rating: 4.8,
      reviews: 1456,
    },
  ]

  const productCategories = [
    { name: "Roupas Femininas", image: "/women-dress-fashion.jpg" },
    { name: "Roupas Plus Size", image: "/plus-size-clothing.jpg" },
    { name: "Roupas Masculinas", image: "/men-shirt-clothing.jpg" },
    { name: "Sapatos Masculinos", image: "/men-shoes-sneakers.jpg" },
    { name: "Acessórios de Moda", image: "/fashion-accessories-bag.jpg" },
    { name: "Celulares e Dispositivos", image: "/smartphone-mobile-phone.jpg" },
    { name: "Eletrodoméstico", image: "/home-appliances-kitchen.jpg" },
    { name: "Acessórios para Veículos", image: "/car-accessories-tire.jpg" },
    { name: "Áudio", image: "/headphones-audio-music.jpg" },
    { name: "Bolsas Femininas", image: "/women-handbag-purse.jpg" },
  ]

  const highlights = [
    {
      name: "Garrafas para Água",
      image:
        "https://acdn-us.mitiendanube.com/stores/002/654/691/products/garrafas-para-bebidas-capa-5f15e6f70f2208700017079151026196-1024-1024.png",
      timeLeft: "Acaba em 11 minutos",
    },
    {
      name: "Relógio de Parede Decorativo",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSERUQEhIVFhUVGBcWGBUWFxcVFhoXFRgWFxUWFRcYHiggGBslGxUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy8lHyUtKystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIEBQYDB//EAEoQAAEDAQUEBgUKAwYEBwAAAAEAAhEDBAUSITFBUWFxBiIygZGhE1KxwfAUI0JicoKSstHhM1OiFTRjs9LxBxZD40RzdIOEk8L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAgMEAQX/xAArEQACAgEDAwMDBAMAAAAAAAAAAQIRAxIhMQQiQRMycVFh8VKBkaEjweH/2gAMAwEAAhEDEQA/APcEIQgAQhCABCEIAEISFyAFSSo9S0gKst99U6YxPe1o3uIHtQBcmoFzdaAsNaOmgdPoKVWsB9MDBSHOo+GhVVfpJanfTs1EbpfXd4sGHzSPJFDrHJnpTrYEz5cF5S+9azu1bK3JlGkwfiLifJczbSdalqP/AMjD5Cmk9eA/oSPWvlwTm2wLyMWuNKlrB3/KS7yLF1ZeVQdm2WgcHU6VQeJIKPXgd9CR6220grqKgXltn6QWkaVrPU+q8Pou73ZsHirSz9MHNE1qFRjdtRkVqX46eidZIsR45I9ABSrPXZ0gpVhNOo13I5941Ct6VqBTk2qJSE1r5TkACEIQAIQhAAhCEACEIQAIQhAAhCEACEhKiWm1AIA7VawCor5v+nQbie8DcNSTuAGZKzHSXpnhcaNnAfU0LvoN5naeCx/oHVH+kquL3n6TtnADQBRnmUeC+PC5bs0V49LalSRT6jd+Rd7wO6Z4KlaXOdjIxO3u6+X352+C4vtDW9Voxu3DTlx+IKlULmr1c3u9G3dt/CPfB5qajknu9irljhscrVahrUqFxG84vAnLzURtuDjFNjqhGxrXP8mhaWjcNmojFUbj2TU63HsjLZtB01V66g9rPm6cxo0Q0fonWCPkm88vBh22W1u7NmcB9YsZ+Yyuv9j246U6Y51P9LVuqlmfhywtdGWI5SlbY3lnabiiMQzGKNfFUWOK8CepL6mDbc1v9Skf/dPvanm7rW3Wzkj6r6bvaQfBbWz2VzGgVKjC77UZd8SnULLVA62EmTGE5Rs96NEX4D1JLyef1a2D+LTqU42vY5o/ERC7WesJxU3wdjgY8HArb031JcHMLQDAJzxDf8b1W2i7bLWc4Gm0PbEuZLHCd5Ha75SPBB8DrPLyZ6tDiHVGAu2VGzSq8xUZ2ubg5Wl2X9WpZekNZo+jUAbVHJw6tTycdxTK/R+qzOjUDx6j4DvHsuPOFWuInA9ppv3EGOca94kHgpuGSHG46lCfJ6Nc/SCnWHVdnoQdQdoI38Ff0a4K8ZwOY4OBIIiHA6gaDc5uu8LS3B0qdiFKsACey4TB4QcweEnmU2PPe0hMmBreJ6SChV9jtocAQdVPa6VoM4qEIQAIQhAAhCEACEIQAJCUqh2y0QEAc7baw0HNeX9JulL7Q51CzuIpjJ9Ubd7WH3pel/SF1oqOstF0MGVV42/UafaqbqUWYnZNGg38B+v7A5suR3piasWJLukFGiykzEeq0bd/6lMsbatrMUxgogwXnbG71j5cjr0u663WoitaJbS1ZT0kbC7c3zPmdrZrrLmAMIYIGEgAgDZA0hNjw6d3yLky6tlsiqs1ip2ZoLWEk5YtXmePGNBqtF/ZRcBLy2CDlqY2KxZQDRAyMa+9Q6Ic2sGF5cMM59+yeCs9uSSdrYmNszRsHxouqrbwa9hDhUd1nRh0A81Zp4yvYSUaSZwtVna8dYTAMZkew8FBsL3CzktBJkxAnUxMKyq9k8j7FDuX+EObvauNd37DJ9n7oLNdzcILwS4iXEkzJ125QudmZ6Ot6ME4XCQDsPwD5blOtNobTaXO09qjWGi4uNZ4hzsgNzcteOQ+CQuOKTSR1SbTciaQuLrK0ycIBOpGRPPeu5SFUZIq3Xa4Oc8PJBiGnQQq6v6Os51CozFg2kabCWnUH2qwdZxTr0gCc8Wp+q9WFSmDqprcpLb+DBXjdtSzgubNWjqRq9vEga/aHfkM4QY17cTc2+zn+vsOS3PyZ7XOJdIJ6oAiB7/2WfvO5czWs0B2ZdTEYXb42B3DQqWTCpfJTHlcX9jhcl9usxh7iaciJ1Ge/fprrz19Huy8G1GhzXAg6ELyZrmVWkgZZhzCNDoQQdmzPkdhPS4b4dYaoa4k2d5jeWE/Hfz7U8c3F6ZFMuNSWqJ7S10pVXXfbA9oIMgiQRoQdqsAVpMoqEIQAIQhAAhCRxgIA5V6kBefdO7/ACwfJ6R+cft9Vu0rTdIbzFGm6o7Ro8TsC8poudVe6vU7Tz4DYAoZsmlUi+DHqdsSzUW0mScmtzJ37+9Oua7zanivVHzY/hsOhj6RHq689efFlH5XX9CP4VODUI+kdjQeOfdK3d22aHBgZ1Q3taAbA0BGHHW75Y2bJey4Q+67K2q0kgkSWmcpiJ9qvaNINAa0QBkByS02wE9aUqMrdgq9395H2P1Vgq9395+4uT8fI0PPwJe+jPthWCr74/6f2wrBEfcwl7Y/uNqaHkfYq+7KoZQxOyEu9pgBWKEzW9ip7UUbLY1z/SVZy7DRmBxO8/77osbNeLHuwtmc/LvUuUEpFFryNKafgVCQFKqiFdbP7xR+9+V6sCFX2z+8UfvflcrBThy/kefC+P8AbGOaq6pZWUWEgQ0ZnU+3uVomOCZoVMwnSK7XA/LbMJdANRgH8RkdoD1gD3jLnWyytTxNzY8ae0H481vrbkWgNccROYGTY2uOxYe+LD8lrekaPmK7oc0aU6p0I3Nd7ctqz5sepbcovhyaXT4ZP6D306jV+RVXSDnScd3qn415gL1KzVZC8RvOyF7eqYe0hzCN4zEHj+i9E6E378poNcT1x1Xj6w4bJ18lzDPUqfJ3Pjp2jZITabpCcrEAQhCABR7XUgKQVS31awxjnHRoJPIIAwXTa3GrVFnB6res/nsHh7Vm72tXoaXV7b+q3fxPd7SFOc1xeXu7T+u7hizA4wD5qFdtD5Tb51ZZx3Y5/wBUn7gWSK15LZtk/Tx0i/6P3W6z2cBrQ6oYL+Z13TGQWpiq1oeMAAbLgZmdsZe9cbvY7EQQA3LCdp3yrK15UnfZPsWprZsyp7pCUbT80Kjt0nxyhcGPrvGJuFoOgOsbJyKjVM6dBh0cRPKQI/qKuQhXIHUSJYbYXEscML26jh8EeI3qR6FuLHHWiJ4KFahhr03DbIPmPePBWBTRfh+BZqt15OdWi10YhMGRzCeiUJxBoqDeNY79I5pj7Qxvae0ZxmQM9Yz2qObDnLSAceM9UQ7rYgHDeN8pDd+TgHdtpa6WtMk6OyjQl2RnUpbZ2kSadoY7svaZ3OB0105FI+1MGRewc3AbY371zr2XEXODoccJacIJaWyJz1kOIXKtd8yGua1pAEYSSIaW6hwnInIghG52kTwlTWiEqZCiFgmYEjQxn3JyEIAiXlaCxow9pxDRzPx5rgbvfE+mfi/p8NfNd7bbadOMWbj2WgYnE/VAzXFttMF74aAOzqZ+s7SeA8VN1e5SLklsv+hd9cuxMf2mGD3yAfFp8lX22y+nZUp1acMPV2iQZ04iAQRt5Kwu2ietUcINQzHASR+Y+S7WwuwjC3ESQNQIG05ojdJhKtTSPOqDXNxUXmX0jhJ9ZurX94IPMkbF16PWr5LbAZinXgOGwOnquHeYP21P6V2f0dWnaBoT6GpydPoz3OJH31V26ztcAHmA17SXDVrQQHOHISe5Zci0ZLXk1Y3rhT8HsViqyFMWY6K241KLS4jEJa6NMTCWuI4Eie9aZq1IxsVCEIAZVOSxnTCtLW0gYNR4b3DMzwyC19qdkvP+klaa3CnScTzqHA0+ISZHUSmJXIzlvtIY2pWjIAuA5dlvsC79CbAadnLx1nvJdzjqtz3ZF33lR9JqpFDCBJe9rY3gS72tb4rdXbRNJlKk1kgANJmIDQBKlgW1lc77q+hc2EEiSIMCRx2hdbd/DfyKdZ29VOrU8TS0yJEZarU1aozJ1KystAIo0ag+hhPjEeYA71bU3hwDgZBzC506IDAzUAYc9oiM1E/swCQ2o9rTsB+POUqTXAzalyBd6S0CNKYknZJkR8eqVzr3oaLort6h0qtGQ4PGznpyU6z0GsGFo/UneU6tTDwWuEgoUXV+Tjkr+wtKq1wDmuBB0IMhOWRtliq2RxqUCcBzLNR4fBVjdfSWnUhr+o7+k8ilWVXplszrxOrjui8lCQGUSqkxySUkqjvq3Pc9tmoGKjs3OH0G6+J9nMJZSUVY0YuTpF8ESoNotraTRif3nU9w9gVFb+kDndWkI4nNx5BclkUeTsccpcGhtt406Ql7gOG08gqOrfNWscNIYG+ucz3Df8ZKDYrsdUdifLid+f4j7lqbHYWsA2nyHJItc/sv7HemH3f9EGw3a2mDUeSJ7TiZe7gTsHALrZ8NQh7y1rW9hkjxcPieWthXoNfAcJjiR7Fy/s6l6nm79U2hrjg4przydhUB0IPIg+xKudGzMZOFsTE5k6TGvMpxKpvRN14KO+7Ia9nqMLcJcHBuYOYza78UeCyFirelpMeR2mw4cR1XDyXoVepLsGEwBOLZyXn1KngrWij6lUuA3NqjGAs3URuBo6eVTND0AtZDqlNxzyd3t+ad+Rp+8vSKDpC8k6PVsFsZl2nFs/8AmMkDxoH8S9WsTsl3DK4i5o1IlIQhVJES3HJea35UmpXdxp0/AY16PeGi8wvGpLrSN1oZ/lKGf2mjp/cZ28W47RZae+pJ7iz3By9DoVetgwuyE4o6vKd6wLBN4WYbmuPlU/Rb2zWprnmmJluu7YPeu4doIXNbmyxtNqwBrQMTnZAfqubm2iJxMn1dnjHxvXOs8NtDS7QtgHYDn+sfeVhKqt7Eb0pUiPYbZjBBEObkR7x4HwUqVW2R2KvUcNIAnYT1f9JViuwdoWaSY5JKRCcQHtBEHRZO/LhwkvpjI6j42rWJDmlnCM1THhNwdoxF3XvUomNW7Wu2cty1F33xTqjIwfVOR/dV993MHAvZkfjX9Vl3McCYEFpAPCQSNOXxKy6p4nT3Rp0wyq1szb3zeQo0y7UnJo3nZ3bSslZ7Y5uJwPXfm5515AbB8QuFV7nEF2fifaptksJcRI7v1Sucsku0aMI449xxp03VDJJO9xzV9dl0bf6jr3KbYbrDc3eGxWYWiGJLd8mfJlb2XA2hRa0QAuiaiVYiOlJUfAJOgEnuSSkc0EQQCDqDmO9dAgtrVnjGwMa3YDMnyPuXSxWovkOEOaYI8f0Pgn2m0MpNEiBoAAByA3KLdsuL6pjrkQBnAG/cdMuHFS4klZXmLdfBKtFcAtaZl0gQN29YK+m4LxeP5lFru9rg32AreWi0tZAce1kPjvCxXSpsW+i7fSe3wxH3rmTeLDHtJMjMeG1WOjMVKJncBUwO/wA4L1u7zkvH7TOZB0aCeMV6BjxE9y9duw5KPTe0r1K7iySpqFoM5CvDReYWxsPtX/qGHxo/svUbcMl5nejYtFpZvbRqjuc+m78zVHMu0vgfcZ+lleFmO9rx4NqfqFvaFVuLCCMWRI2xx8R4rAW3q2myP/xMJ+8Wj9VvaZaCNA52WySBs3ldw+xHM3vZZ2ig14wuH6jkqy10C2Kbaj3F2QbOUcctP33K2aclwo2YNc58kudtMZDcIGmngFSUbJwnpH2SgKbQ0cyd52ld5TEoKpS8CN3uOlEpqEUcHSklIhAES9KtRrPmmYnHKZaA36xk58llbDRe2qeqx5EzilzZcNTpntWnvavDQ0ZveYa3edpPADM/uuVmsYY3AMycy7aSdSVGcdUi0J6Y/JmK131iSMiBsbl4yc+Sv+jtTq4XsLXtyJI1B0IPcrWhZmtER45roymBptXY4lF2gllclTHpUiFQiKklIiV0By5WiuGNLiDAjTXMxt5p8ptRoIIIkHIhDR1Ve4rKgc0OGhAPcVWWNobXqNb2YBjYDllw1d4cE/5A5ohlZwbuideIIXay2YUxAkk6k6lTptq0P2pOnyda2DLFhmerMTPCdqx/SkzbKI3Uqh8Yb7Vr6lNpIJAJGY3j4yWLv1+K3P8A8OixvIveXewLmR1Fhj3kiLWZIdlPVA5Yq1EA+cd69ZuzReVtbiexk5uqURG8Bxef8sL1e7m5KPTe0v1PuJyE5C0GYj2puS876R0sNpx+vTcw8dC0fiAXpFUZLFdL7LIa71Xa+/u1U8vtZXC+9HnfSRp9Djb2mOa8cwY989y29kqMqNZXgZtDmncHCfYVmLVSD2uYdHNI5SIUnoXVFWymhU1pOLCJzicTcxxlv3VLp5XGivUxqVm4ouyTnvABJyAUeyHKNy53swmk4Dge4fE9y1N0rMsVcqG/2l9IU3lvrQe8jJS7NaGvbiacvMHcVxoWphYHAgAAZTpwXC6R23AQ1zuqOAnThmB3JU3a3sZpU9qLJJKQoVLJjpTK9ZrGl7jAAkngE5VVV3pqkf8ASpnPc+oNnFrfM8lyUq4GirFsbC4mu8Q5whrT9Bmwczqf2VjRZtXOm2Su4XIqgk7Y4ISIldFHJEkolACpqJSLoCym1KgaC4mANUqq7c41cQaepTBLiNrgJAHL41CWUqQ8I2yfQrh7Q4ZTOvAke5OlRbs/hN+9+YqSEJ2rFkqbQx1BuPHHWjDMnTlovPrPW9LXtNfY+rhafq0hhae8OHgtZftqFkstaoCZg4ZzON8Nb3Awe4rJXXQ9FRY3Qhsnmes4dxMdyz9RKoGnp43P4Le56BdaaAyiatXj1Q2m3ul1Reo2JuS896C0i+o+qdGgU2+Je6O958F6PQbATYVUELndzZ1SpEKpEQqjv2yY2ObvH+yvVFtlOQgLo8jtLYcR8Z6+efeFXXXaPk9vBOVO0DCdweNPOPxlanpHYsFQmMjn/qHxuaFlb4sfpKZaMnDrNOmY0z4jJYI/4slM9Ca9XHaN3ZKbWOJH0jJk7TuUi8rQWU5bqTAPjn5LOXFbG22ztLyQ9hwvAy6wGcjcdfEbFoa1MVWFhOeu+DxG6JC2u6aRiVWmxG3VTiDJPrSQZ3xMfG1JdjyC+kTOCIPDMR5DxSMfXAw4Wk6YpHicwT4LtYbMWSXGXOMk+OQ8T4oS3VKjrezt39CVKULjaKhaJDS47goNe9HMEmi7MgATqToBlqU7klyTjBy4O15V3EijTMPdq4fQZoX89g457Cn0aQa0MaIAEAcFWWW1Oa6HUyalQySTHIDLJrRPgVdUm7UsXq3GmnFUPDYCh/L4cWljtYyBO0iTlEGAcidVMlEpyZCF5aH0b4M6iMwWiP6pngVOSShACyiUia94AJOgzKAHyklQzedL1/I/ou9Cu14lpkaLiknwdcZLlEW9baGDCCA52/YNJUb5dRbSNNrvokcSSNT3q2lcbVJY4DUtIjuStPdjxktlRDuu1NLRTB6wDiRwxfuFLtNHGMMuGc9UwfFc7AwtptaRBzy5klR7XUZZadW0PccPaO/bAG8kmPBEbpWEq1NozvTS0+ltFGyDNrPn6vdlTaecnL6wKi1HACTJyJy1ORgd5gd6i3Y178doqfxKzsbvqt+gzkB7tyubnsZq1Wt+jk53Jp6oPM59zViyv1MmlG3FH08epmw6H3f6KgwHU9Z32nZnzK1bQodgowApq3LYwt27BCEIOAmvbKchAGb6QXfjYY1GY5hYV9lmQBmASBGsdpo5a8uK9WtNKQsdfN34H4x1QSOt6jx2X8p1UM+PUrNPT5NL0s86daHWK0C0tBNN8Cq0cTk4cdo4yNq31hfTPzzCCHgHFJgiMjuAhU9+3XjY5waJ0qM2Bx//AA7UEaeE5zo9e5sb/k9Un0DiQ1zvoOOrX7hnn46EoxTtUczQp2j0ujWDgHNMg7R4J8qCK7WMkNJA0DRv3BTAVoTMzQ+VWsqB5+UO7DZ9GOB1qczoOH2lOqAEEESCIIOhB1BVdaj6WoKQ7IzfHs+N/BLNj4x12Uy9xrO1d2eDf393FWcpjBGQSpoqlQkpanY6USmqFeNpgCm09Z3GABvJ2bfBEnSsIx1OicyoDoQeRlOlRLExjW4WOBjUggyTtMKShPYGqYsqHe1SKRjUwB7fcpUplSk10YgDGk5+SJK1R2Dppsi0bVQgNDm5ACSN28wpojZ5LlWs7XiCOR2jiDsUS6ahwFp+i4gcoGXjKVNp0zrSatFgSmOdAkpVzoPbUacspLTIjd+qZsVIHUWvwvOeE4hBy2Ec9AsN0hvD5baPQsM2eg6XEaVKo2De0aeO8Kb0rv0uPyCymHRFR40pt0LQfWjw56RbvsIYxrGNyEAbyT7ys+bLpVLk04cWp2+B+Exluk/78Tl3rbdErrwMxOHWdmeWwfHBU9xXVjfnm1pzIzDnDQDhn58ct/ZKMBJ0+OlqY3U5b7USKbYCchC1GUEIQgAQhCAAhV9vsgcCCNVYJHNlAHntvs76LuHZaTmC3+W/eN3uyLcvfV2Nqtc5jcxAqUycxmQATukHC+NhBgy0er3lYA9pBEgrz6/Lrq0HY2TAmCInPZnkdM2uydA3BZp49LtGrHk1LS/yZro70gdZSKNYl1GcLXkdamfUeN3wJGnoDLQXhppuaQSCTqC36pGq89vB9N4BIwOPVMgmm6M8JnMb8Lus3UEjNRLovOrZXRS6zNTQcZPE0XbeWu8HVUhk1ck549O6PVaz4ES2T2cRgE7FxsFlwNzzc4y4+wfG8qnue/bPay0h3XbngccLss9J6wndKvX1DLQ1sgnMzoFTzZLxSOhSIe4CJIEmBxPBOhMLQyo+AXbgT4KusFlFQGrU6xcTA2ZGM9+nhCsqlMOBadoI8VXWW0eh+aqZQThdsM5mN/77EkqtXwUhel6eRbbYg0ekp9Utzy0jbls96m2arja128ee0eKh2q1+kBp0usTqdABtncp1CnhaGjYAP3RGrdcBJPStXI6VEtVSo1wc1uJkZtGs7957vDapcJGuBJAIkaicxulM9xI/BAfbXuEMpPne4QB3nJdrBRDG4JBdq6N54bsgO5dmOdiILYaIh069ygXlbrPZJrVX4S6YBMk7TgaMzmBy4Ja3sdtVRYUg4F2KI+jGsbZ8vNZDpD0qdUcbNYjLtH1hm1m/CdruPhwrrzvi0W7qtDqFnP8A9lQcdwO4easLruplJgkYWHstGb3kZHCDruLjkOcAznlUdlyUhict3sjhctyhjDGTRm+ocySfzOOwfuVeWSxmo8Mblv0IY06ydrzt8NBAZZGVLQ5rWANa3QNnAwHaDq5x9bU7IERtbouttNoAHM7Sd5UcePW9T/JXJkUFpX4O112AMaGgZD4kq0ASMbCcthjBCEIAEIQgAQhCABCEIARzZVfbbEHAgiQdhVighAHnV79HAMUMxsOrdvCN/wAbcxhLy6OlpLqJLmjMtOT28p1GY8QAXFe71rOCs/etwNfnEO3hSeOvaWjl/UePG7nVGGqWucWHN7OrUaRpintHn1uIU+6+klqonDItDRsMtrDu1Pg7mry9+j9ppOx0iN0bCBoJGgGwEEKvqXtZ3HDeFjAd/NZ8y7nLfm3nwXE5LkeUYy3Rc2DphZapAefRuadKg0P2hIHfCvzVFVoLKmUg4mEGRukLHC4LJXg0Lc3gy1sEjgKo0H2Sub+gVqZ16TMWXbs9Zp8nw4/iT6kyWho3dd7sJwRi2Tp8Qkrk4DABdGmwnvXn76N5URGK1Nj+ZRe8fi+cBUR/SC3s1tLBwfScD50QmtHNLPSrI44BiABzkCI1y0y0hFnc7D14n6swvNW9JLa7/wAVRHJv/aKe28rY/I2wnhTp4j4Na0rmpINEn4PRqTS3EXPmSTnkANypbf0osdAuJqNLzqKYxkkbCRkO8jVY99gqVeq8WyudYcHho7nadxTDZn0uzRp0DvqH5zn1uv5FK5pcDem3yy3t3Sq1VgfQUhQZ/NqxijeGnIeDhxVJRosNQve41qmrqtU9UeJ0z2mNxCiVPnHR6R9Z25rcTRx2Ad8LSXNcNaphLWYQNphxHJ56o+6Cc9VOUpPYtCEI7s7UKgbmBJP0ng9+CnkXc3ANGsOCuLsuSpXON8hp1Ls3P3TwjQDqjQSIi7ubouxnWd1ncdPPXv7oWpoWYBEMP6v4FyZ/Ef5Id3Xc2m0BogfGZ3q0Y2EoCVaDMCEIQAIQhAAhCEACEIQAIQhAAhCEACa5kpyEAQ6tkBVPb7gpvmWjNaRIWoBOjzC8P+H1ImacsP1CWeQ6vkqd/RO2UTNGu7wz/Ewg+S9jdRBXJ9kG5K4JjqbPHvlF70o+de6P8V/seIPeun/Ml7jVrz3UHe0L1g2ELmbuG5c0Hdf2PL29Lr1/lDvFEJ3/ADDfFTJpY3uYfysK9OF3DcniwjcjQGtfQ8qddV6Wj+LaXgHUNkD+ogeSl2H/AIdA51XF32iXeQhvtXp7LIF2bRAXdCOa2Ze7eitGkAAwZbwI/CMvJaChYgNimBqVdpIVtvkYymAnoQunAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIAEIQgAQhCAApChCABKhCABCEIAEIQgAQhCABCEIAEIQgAQhCABCEIA//9k=",
      timeLeft: "Acaba em 2 minutos",
    },
    {
      name: "Protetor de Cabo",
      image: "https://cdn.awsli.com.br/600x450/2582/2582939/produto/225220606e19b6ec2ce.jpg",
      timeLeft: "Acaba em 7 minutos",
    },
    {
      name: "Relógio Casio",
      image:
        "https://images.tcdn.com.br/img/img_prod/1087072/relogio_casio_digital_masculino_w_800hg_9avdf_preto_557_1_a84263940454fe183dc1075ca5effa08.jpg",
      timeLeft: "Acaba em 2 minutos",
    },
    {
      name: "Relógio de Mesa Digital",
      image:
        "https://dcdn-us.mitiendanube.com/stores/001/068/482/products/p_530016_084_l1-3f75dc55efa332f82e16581745477738-640-0.jpg",
      timeLeft: "Acaba em 13 minutos",
    },
    {
      name: "Garrafa Térmica de Aço",
      image:
        "https://a-static.mlcdn.com.br/800x560/garrafa-squeeze-750ml-academia-de-aco-inox-c-tampa-de-metal-arkz-sports/arkzgrupo/ga4600-pr/04bf56e7e7d906153f8ebdd327607aa2.jpeg",
      timeLeft: "Acaba em 1 minuto",
    },
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="bg-[#ee4d2d] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-[#ffe97a] transition-colors">Central do Vendedor</button>
            <span className="text-white/60">|</span>
            <button className="hover:text-[#ffe97a] transition-colors">Vender na Shopee</button>
            <span className="text-white/60">|</span>
            <button className="hover:text-[#ffe97a] transition-colors">Baixe o App</button>
            <span className="text-white/60">|</span>
            <span>Siga-nos</span>
            <div className="flex space-x-2 ml-2"></div>
          </div>
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 hover:text-[#ffe97a] transition-colors">
              <Bell className="w-4 h-4" />
              <span className="hidden sm:inline">Notificações</span>
            </button>
            <button className="hover:text-[#ffe97a] transition-colors">Ajuda</button>
            <button className="flex items-center space-x-1 hover:text-[#ffe97a] transition-colors">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Português (BR)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-1 hover:text-[#ffe97a] transition-colors">
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Entrar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#ee4d2d] py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
              <span className="text-[#ee4d2d] font-bold text-xl">S</span>
            </div>
            <span className="text-white text-2xl font-bold hidden sm:inline">Shopee</span>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Input
                placeholder="Buscar produtos, marcas e muito mais..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-12 py-3 text-base rounded-md bg-white border-2 border-[#fb5533] focus:border-[#ec3814] focus:ring-2 focus:ring-[#ec3814]/20 transition-all"
              />
              <Button
                size="sm"
                className="absolute right-0 top-0 h-full px-6 bg-[#fb5533] hover:bg-[#ec3814] border-0 rounded-l-none transition-colors"
              >
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 relative">
              <ShoppingCart className="w-6 h-6" />
              <Badge className="absolute -top-2 -right-2 bg-[#ffe97a] text-[#ee4d2d] text-xs px-1.5 py-0.5 rounded-full">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-white/10">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Banner */}
          <div className="lg:col-span-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-8 relative shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center justify-between ">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <div className="text-5xl font-bold text-[#ee4d2d] mb-3">10.10</div>
                <div className="text-3xl font-bold text-[#ee4d2d] mb-6">
                  OFERTAS
                  <br />
                  RELÂMPAGO
                </div>
                <Button className="bg-[#ee4d2d] hover:bg-[#ec3814] text-white rounded-full px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Compre agora&nbsp; ➔
                </Button> 
              </div>
              <div className="flex items-center space-x-4">
                <img src="/red-high-heel-shoe.jpg" alt="Sapato vermelho" className="w-28 h-28 drop-shadow-lg rounded-xl" />
                <img src="/smartwatch-black.jpg" alt="Smartwatch" className="w-28 h-28 drop-shadow-lg rounded-xl" />
                <img src="/cooking-pot-white.jpg" alt="Panela" className="w-28 h-28 drop-shadow-lg rounded-lg" />
              </div>
            </div>
          </div>

          {/* Side Banner */}
         <div className="bg-gradient-to-br from-[#8B0000] to-[#DC143C] rounded-xl p-6 text-white relative shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="text-4xl font-bold mb-3">10.10</div>
            <div className="text-sm font-semibold mb-6">FESTIVAL LOJAS OFICIAIS</div>
            <Button
              variant="outline"
              size="sm"
              className="bg-white text-[#8B0000] border-white hover:bg-gray-100 rounded-full mb-6 font-semibold"
            >
              Veja os Itens
            </Button>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#ffe97a] rounded-full flex items-center justify-center">
                  <span className="text-[#8B0000] text-sm font-bold">$</span>
                </div>
                <span>Lojas Oficiais</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#ffe97a] rounded-full flex items-center justify-center">
                  <span className="text-[#8B0000] text-sm">🚚</span>
                </div>
                <span>FRETE GRÁTIS EXCLUSIVO</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#ffe97a] rounded-full flex items-center justify-center">
                  <span className="text-[#8B0000] text-sm">✴️</span>
                </div>
                <span>PRODUTOS OFICIAIS</span>
              </div>
            </div>
          </div>
        </div>

      <div className="bg-white rounded-xl p-6 mb-8 shadow-2xl border border-gray-200">
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex flex-col items-center text-center group hover:scale-105 transition-transform"
              >
                <div
                  className={`w-14 h-14 ${category.color} rounded-full flex items-center justify-center mb-3 text-xl group-hover:shadow-lg transition-shadow`}
                >
                  {category.icon}
                </div>
                <span className="text-xs text-[#555555] group-hover:text-[#ee4d2d] transition-colors font-medium">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 mb-8 shadow-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-bold text-[#ee4d2d]">OFERTAS RELÂMPAGO</h2>
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="p-2"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="p-2"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button variant="ghost" className="text-[#ee4d2d] hover:bg-[#ee4d2d]/10">
                Ver Tudo <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          <div
            className={`grid ${viewMode === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-6" : "grid-cols-1 md:grid-cols-2"} gap-4`}
          >
            {flashDeals.map((deal, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-[#ee4d2d]/30 group"
              >
                <div className="relative mb-4">
                  <img
                    src={deal.image || "/placeholder.svg"}
                    alt="Product"
                    className="w-full h-40 object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 left-2 bg-[#ffe97a] text-[#ee4d2d] text-xs px-2 py-1 rounded-full font-bold shadow-sm">
                    {deal.discount}
                  </div>
                  <button className="absolute top-2 right-2 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">{deal.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">({deal.reviews})</span>
                  </div>
                  <div className="text-[#ee4d2d] font-bold text-lg">{deal.price}</div>
                  <div className="text-xs text-gray-500 line-through">{deal.originalPrice}</div>
                  <div className="bg-[#ee4d2d] text-white text-xs px-2 py-1 rounded text-center font-bold">
                    {deal.sold}
                  </div>
                  <div className="bg-[#ffbda6] text-[#ee4d2d] text-xs px-2 py-1 rounded text-center font-medium">
                    {deal.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Banners */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500 mb-1">De R$50,36</div>
              <div className="text-2xl font-bold text-[#ee4d2d] mb-2">R$ 25,90</div>
              <div className="text-lg font-bold text-[#ee4d2d]">
                Achadinhos
                <br />
                da Shopee
              </div>
            </div>
            <img
              src="/images/design-mode/mini-garrafa-termica-300ml-cores-sortidas-65fb148869cf9.jpg"
              alt="Beauty products"
              className="w-64 h-32 object-cover rounded"
            />
            <Button className="bg-[#ee4d2d] hover:bg-[#ec3814] text-white rounded-full px-4 py-2">
              COMPRAR
            </Button>
          </div>

          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 flex items-center justify-between">
            <div className="text-2xl font-bold text-[#ee4d2d]">
              Lojas Oficiais
              <br />
            </div>
            <img
              src="/images/design-mode/6a48383706628e554f2205d07eeb445b.jpg"
              alt="Furniture"
              className="w-64 h-32 object-contain rounded"
            />
            <Button className="bg-[#ee4d2d] hover:bg-[#ec3814] text-white rounded-full px-4 py-2">
              COMPRAR
            </Button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-2xl border border-gray-200">
          <h3 className="text-xl font-bold text-[#555555] mb-6">CATEGORIAS</h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-6">
            {productCategories.map((category, index) => (
              <button
                key={index}
                className="flex flex-col items-center text-center group hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-gray-200 group-hover:border-[#ee4d2d] transition-colors shadow-sm group-hover:shadow-md">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                </div>
                <span className="text-xs text-[#555555] leading-tight group-hover:text-[#ee4d2d] transition-colors font-medium">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div className="bg-white rounded-xl p-6 mb-8 shadow-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#ee4d2d]">DESTAQUES PARA VOCÊ</h2>
            <Button variant="ghost" className="text-[#ee4d2d] hover:bg-[#ee4d2d]/10">
              Ver Tudo <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-[#ee4d2d]/30 group"
              >
                <div className="relative mb-4">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 left-2 bg-[#ee4d2d] text-white text-xs px-2 py-1 rounded-full font-bold shadow-sm">
                    TOP
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-[#555555] line-clamp-2">{item.name}</div>
                  <div className="flex items-center text-xs text-[#ee4d2d] bg-[#ee4d2d]/10 px-2 py-1 rounded-full">
                    <Clock className="w-3 h-3 mr-1" />
                    {item.timeLeft}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-white mt-12 border-t shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <h4 className="font-bold text-[#555555] mb-6 text-lg">ATENDIMENTO AO CLIENTE</h4>
              <ul className="space-y-3 text-sm text-[#8a8a8a]">
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Central de Ajuda</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Como Comprar</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Métodos de Pagamento</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Garantia Shopee</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Devolução e Reembolso</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Fale Conosco</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Ouvidoria</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#555555] mb-6 text-lg">SOBRE A SHOPEE</h4>
              <ul className="space-y-3 text-sm text-[#8a8a8a]">
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Sobre Nós</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Políticas</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Política de Privacidade</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Programa de Afiliados</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Seja um Entregador</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Ofertas Relâmpago</button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors">Shopee Blog</button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#555555] mb-6 text-lg">PAGAMENTO</h4>
              <div className="grid grid-cols-3 gap-3">
                <div className="w-14 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center text-white text-s font-bold shadow-sm">
                  VISA
                </div>
                <div className="w-14 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded flex items-center justify-center text-white text-s font-bold shadow-sm">
                  MC
                </div>
                <div className="w-14 h-10 bg-gradient-to-r from-yellow-500 to-red-500 rounded flex items-center justify-center text-white text-s font-bold shadow-sm">
                  ELO
                </div>
                <div className="w-14 h-10 bg-gradient-to-r from-blue-800 to-blue-900 rounded flex items-center justify-center text-white text-s font-bold shadow-sm">
                  AMEX
                </div>
                <div className="w-14 h-10 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded flex items-center justify-center text-white text-s font-bold shadow-sm">
                  BB
                </div>
                <div className="w-14 h-10 bg-gradient-to-r from-teal-500 to-cyan-600 rounded flex items-center justify-center text-white text-s font-bold shadow-sm">
                  PIX
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#555555] mb-6 text-lg">SIGA-NOS</h4>
              <ul className="space-y-3 text-sm text-[#8a8a8a]">
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors flex items-center space-x-2">
                    <span>Instagram</span>
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors flex items-center space-x-2">
                    <span>TikTok</span>
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors flex items-center space-x-2">
                    <span>WhatsApp</span>
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors flex items-center space-x-2">
                    <span>Facebook</span>
                  </button>
                </li>
                <li>
                  <button className="hover:text-[#ee4d2d] transition-colors flex items-center space-x-2">
                    <span>LinkedIn</span>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#555555] mb-6 text-lg">BAIXAR APP SHOPEE</h4>
              <div className="space-y-4">
                <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-500 text-xs font-bold"><img src="/images/design-mode/480px-QR_code.svg.png"/></span>
                </div>
                <div className="flex flex-col space-y-2">
                  <button className="w-full h-10 bg-gray-600 text-white rounded-lg flex items-center justify-center text-xs font-bold hover:bg-gray-800 transition-shadow shadow-2xl shadow-black/40">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
  <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
</svg> &nbsp; App Store
                  </button>
                  <button className="w-full h-10 bg-green-600 text-white rounded-lg flex items-center justify-center text-xs font-bold hover:bg-gray-800 transition-shadow shadow-2xl shadow-black/40">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-android" viewBox="0 0 16 16">
  <path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.9 8.9 0 0 1 8 5a8.9 8.9 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg> &nbsp; Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-xs text-[#8a8a8a] space-y-4">
            <p className="font-medium">© 2025 Shopee. Todos os direitos reservados.</p>
            <p>
              País e região: Singapura | Indonésia | Tailândia | Malásia | Vietnã | Filipinas | Brasil | México |
              Colômbia | Chile | Taiwan
            </p>
            <p className="max-w-4xl mx-auto">
              CNPJ/MF nº 35.635.824/0001-12. Endereço: Av. Brigadeiro Faria Lima, 3729 - 2º e 3º andares, Itaim Bibi,
              São Paulo (SP), Brasil, 04538-132
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
