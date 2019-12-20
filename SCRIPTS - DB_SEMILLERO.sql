create table personas(
  per_num_dcto number(10) not null,
  per_tipo_dcto varchar(2) not null,
  per_nombre varchar(100) not null,
  per_fecha_nac varchar(20) not null,
  constraint "per_tipo_dcto_CHK" check (per_tipo_dcto IN('CC','NI','CE','PA')),
  constraint "PK_personas" PRIMARY KEY (per_num_dcto)
);

-- Se crea una sequeencia para asignar un autoincremento en la tabla personaje
create sequence "SEC_PERSONAS" minvalue 1 start with 1 increment by 2;




create table compras(
  com_id number(10) not null,
  com_num_dcto number(10) not null,
  com_comic number(3) not null,
  com_fecha_compra varchar(50) not null,
  com_cant number(3) not null,
  constraint "PK_compras" PRIMARY KEY (com_id)  
);

create sequence "SEC_COMPRAS" minvalue 1 start with 1 increment by 2;



--En la tabla personaje se crea una llave foránea con el campo pers_id_comic haciendo refefencia a la tabla comic con el campo SCID.
ALTER TABLE compras add constraint "FK_PERSONA_NUM_DCTO" foreign key (com_num_dcto) references PERSONAS (per_num_dcto);

ALTER TABLE compras add constraint "FK_COMIC_SCID" foreign key (com_comic) references COMIC (scid);



select * from personas;
select * from comic;
select * from compras;



-- CONSULTA PARA EL REPORTE DE TOTALES
SELECT COMIC.SCNOMBRE, SUM(COMPRAS.com_cant), COMIC.SCPRECIO, (SUM(COMPRAS.com_cant) * COMIC.SCPRECIO) 
FROM COMPRAS 
INNER JOIN COMIC ON COMIC.SCID = COMPRAS.com_comic 
INNER JOIN PERSONAS ON PERSONAS.PER_NUM_DCTO = COMPRAS.com_num_dcto 
GROUP BY COMIC.SCNOMBRE, COMIC.SCPRECIO;

