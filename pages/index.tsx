import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>The fun begins right here</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/drop.webp" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT</h2>
          <p className={styles.selectBoxDescription}>
            Claim an NFT from the collection.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/token.webp" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
           Stake your  <b>Morkie Pass</b>{" "} at fixed APR
        
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://token.morkie.xyz/`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/tokenx.webp" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Morkie</h2>
          <p className={styles.selectBoxDescription}>
           Stake your  <b>Mork</b>{" "} token at fixed APR
        
          </p>
        </div>

      </div>
    </div>
  );
};

export default Home;
