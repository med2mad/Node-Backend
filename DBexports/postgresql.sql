--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: profiles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.profiles (
    _id integer NOT NULL,
    name character varying(255) NOT NULL,
    age integer NOT NULL,
    photo character varying(255) DEFAULT ''::character varying NOT NULL
);


ALTER TABLE public.profiles OWNER TO postgres;

--
-- Name: profiles__id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.profiles__id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.profiles__id_seq OWNER TO postgres;

--
-- Name: profiles__id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.profiles__id_seq OWNED BY public.profiles._id;


--
-- Name: profiles _id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles ALTER COLUMN _id SET DEFAULT nextval('public.profiles__id_seq'::regclass);


--
-- Data for Name: profiles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profiles (_id, name, age, photo) FROM stdin;
1	Agustin Ortizortiz	34	Agustin Ortizortiz.jpg
2	Alita Willmer	39	Alita Willmer.jpg
3	Anjanette Devendorf	31	Anjanette Devendorf.jpg
4	Arden Fingal	31	Arden Fingal.jpg
5	Arminda Aristy	36	Arminda Aristy.jpg
6	Augustine Lucko	36	Augustine Lucko.jpg
7	Augustine Tuero	38	Augustine Tuero.jpg
8	Barabara Kieltyka	28	Barabara Kieltyka.jpg
9	Birgit Squibbs	21	Birgit Squibbs.jpg
10	Bo Dembek	21	Bo Dembek.jpg
11	Britteny Abalos	36	Britteny Abalos.jpg
12	Brittney Mcclaren	21	Brittney Mcclaren.jpg
13	Bruce Alsager	37	Bruce Alsager.jpg
14	Caitlyn Novar	24	Caitlyn Novar.jpg
15	Camilila Keyzer	22	Camilila Keyzer.jpg
16	Carmon Dziadzio	39	Carmon Dziadzio.jpg
17	Carolyne Sjodin	34	Carolyne Sjodin.jpg
18	Carson Rupolo	24	Carson Rupolo.jpg
19	Cassy Es	34	Cassy Es.jpg
20	Chanel Emshwiller	22	Chanel Emshwiller.jpg
21	Christian Schamel	31	Christian Schamel.jpg
22	Coral Gysel	23	Coral Gysel.jpg
23	Dean Semanco	29	Dean Semanco.jpg
24	Deann Baltasar	39	Deann Baltasar.jpg
25	Dillon Ponder	27	Dillon Ponder.jpg
26	Dong Cansler	25	Dong Cansler.jpg
27	Eda Testone	26	Eda Testone.jpg
28	Edyth Cernohous	26	Edyth Cernohous.jpg
29	Elias Bellack	28	Elias Bellack.jpg
30	Eliza Crandall	35	Eliza Crandall.jpg
31	Emmanuel Dahmen	23	Emmanuel Dahmen.jpg
32	Erin Buzick	21	Erin Buzick.jpg
33	Erwin Mosch	27	Erwin Mosch.jpg
34	Ezekiel Jaskiewicz	20	Ezekiel Jaskiewicz.jpg
35	Flora Cisneros	31	Flora Cisneros.jpg
36	Garrett Zier	37	Garrett Zier.jpg
37	Genaro Adolphsen	23	Genaro Adolphsen.jpg
38	Genny Miyata	24	Genny Miyata.jpg
39	Georgianna Cabal	29	Georgianna Cabal.jpg
40	Gilbert Carpin	26	Gilbert Carpin.jpg
41	Holly Dienger	24	Holly Dienger.jpg
42	Jake Travick	26	Jake Travick.jpg
43	Janita Lestina	30	Janita Lestina.jpg
44	Joe Herberger	28	Joe Herberger.jpg
45	Jonie Bryda	32	Jonie Bryda.jpg
46	Josef Towey	30	Josef Towey.jpg
47	Judie Calisti	32	Judie Calisti.jpg
48	Julie Kilps	24	Julie Kilps.jpg
49	Kareem Prink	29	Kareem Prink.jpg
50	Krystal Delahaye	31	Krystal Delahaye.jpg
51	Lamar Ruys	35	Lamar Ruys.jpg
52	Laticia Steder	33	Laticia Steder.jpg
53	Laurie Goldberger	25	Laurie Goldberger.jpg
54	Laurinda Bjur	39	Laurinda Bjur.jpg
55	Leonora Lawal	38	Leonora Lawal.jpg
56	Lettie Barquera	21	Lettie Barquera.jpg
57	Letty Gillfillan	33	Letty Gillfillan.jpg
58	Lilia Rutten	20	Lilia Rutten.jpg
59	Lorenzo Sprengel	34	Lorenzo Sprengel.jpg
60	Lorinda Brandal	24	Lorinda Brandal.jpg
61	Lucila Fern	23	Lucila Fern.jpg
62	Mallie Lagro	20	Mallie Lagro.jpg
63	Manuela Welsby	32	Manuela Welsby.jpg
64	Mari Serratt	29	Mari Serratt.jpg
65	Mariano Stramel	37	Mariano Stramel.jpg
66	Markita Abdula	22	Markita Abdula.jpg
67	Marquitta Cumbaa	39	Marquitta Cumbaa.jpg
68	Matt Rosten	33	Matt Rosten.jpg
69	Melina Koloski	32	Melina Koloski.jpg
70	Monte Venezio	32	Monte Venezio.jpg
71	Natisha Bac	28	Natisha Bac.jpg
72	Nicholas Hermandez	29	Nicholas Hermandez.jpg
73	Nicholas Lauer	27	Nicholas Lauer.jpg
74	Norberto Domzalski	40	Norberto Domzalski.jpg
75	noureddine hashadi	28	noureddine hashadi.png
76	othman amrani	28	othman amrani.jpg
77	Penny Bartick	28	Penny Bartick.jpg
78	Perry Strebler	40	Perry Strebler.jpg
79	Reuben Clews	33	Reuben Clews.jpg
80	Rodolfo Gimbel	31	Rodolfo Gimbel.jpg
81	Ronnie Bihun	37	Ronnie Bihun.jpg
82	Roxanna Landau	21	Roxanna Landau.jpg
83	Rudolf Huskin	23	Rudolf Huskin.jpg
84	Samual Dozer	40	Samual Dozer.jpg
85	Samual Uphold	36	Samual Uphold.jpg
86	Serina Frewin	39	Serina Frewin.jpg
87	Shad Mcelmeel	33	Shad Mcelmeel.jpg
88	Shayne Pascoal	24	Shayne Pascoal.jpg
89	Sherly Kines	37	Sherly Kines.jpg
90	Steffanie Donahay	24	Steffanie Donahay.jpg
91	Stephan Kegel	30	Stephan Kegel.jpg
92	Susana Levenduski	38	Susana Levenduski.jpg
93	Suzann Castens	37	Suzann Castens.jpg
94	Taneka Holveck	26	Taneka Holveck.jpg
95	Teena Dudzik	25	Teena Dudzik.jpg
96	Therese Shocklee	29	Therese Shocklee.jpg
97	Towanda Schnurer	39	Towanda Schnurer.jpg
98	Tracy Descoteau	34	Tracy Descoteau.jpg
99	Twanda Klis	25	Twanda Klis.jpg
100	Winford Emmer	24	Winford Emmer.jpg
\.


--
-- Name: profiles__id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.profiles__id_seq', 100, true);


--
-- Name: profiles profiles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.profiles
    ADD CONSTRAINT profiles_pkey PRIMARY KEY (_id);


--
-- PostgreSQL database dump complete
--

