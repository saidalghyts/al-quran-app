export default function isiSurah({ data }) {
  return (
    <div>
      {data.nomor !== 1 ? (
        <h1>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      ) : null}
      {data.ayat.map((isi) => (
        <>
          <p key={isi.id}>{isi.ar}</p>
          <p>{isi.idn}</p>
        </>
      ))}
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('https://equran.id/api/surat');
  const noSurah = await res.json();

  const paths = noSurah.map((no) => {
    return {
      params: {
        surah: no.nomor.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (contex) => {
  const nomor = contex.params.surah;
  const res = await fetch('https://equran.id/api/surat/' + nomor);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
