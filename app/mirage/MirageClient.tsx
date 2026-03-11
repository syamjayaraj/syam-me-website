"use client";

import { useState, useRef, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Calendar, ChevronRight, Volume2, VolumeX, Ghost } from "lucide-react";

interface MirageClientProps {
  paranormalPosts: any[];
  waheedaPosts: any[];
  otherPosts: any[];
}

export default function MirageClient({
  paranormalPosts,
  waheedaPosts,
  otherPosts,
}: MirageClientProps) {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  const renderPost = (post: any, isGhost: boolean) => (
    <Link
      href={`/mirage/${post.id}`}
      key={post.id}
      className={`${styles.storyCard} ${isGhost ? styles.ghostCard : ""}`}
    >
      {post.thumbnail && (
        <div className={styles.imageWrapper}>
          <img
            src={post.thumbnail}
            alt={post.title}
            className={styles.storyImage}
          />
        </div>
      )}
      <div className={styles.storyContent}>
        <div className={styles.storyDate}>
          <Calendar className="w-4 h-4" />
          <span>
            {new Date(post.published).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <h2 className={styles.storyTitle}>{post.title}</h2>

        <div className={styles.storyMeta}>
          <span className={styles.readMore}>
            Read Story <ChevronRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );

  return (
    <main className={`${styles.main} ${styles.ghostlyMain}`}>
      {/* Background Audio */}
      <audio
        ref={audioRef}
        src="/assets/audio/Scary Ghost Sound Effects.mp3"
        loop
      />

      {/* Floating Sound Control */}
      <button 
        onClick={toggleMute} 
        className={styles.soundToggle}
        title={isMuted ? "Unmute ghostly atmosphere" : "Mute atmosphere"}
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6 animate-pulse text-purple-400" />}
      </button>

      {/* Fog Overlay Effect */}
      <div className={styles.fogOverlay}></div>

      <section className={styles.storiesSection}>
        <div className={styles.container}>
          <div className={styles.headerStack}>
            <h1 className={`${styles.title} ${styles.flicker}`}>മരീചിക (Mirage)</h1>
            <p className={styles.subtitle}>
              Step into the parallel realms of mystery and the unknown
            </p>
          </div>

          {paranormalPosts.length > 0 && (
            <div className={styles.collectionSection}>
              <div className={`${styles.collectionHeader} ${styles.ghostHeader}`}>
                <h2 className={`${styles.collectionTitle} ${styles.ghostTitle}`}>
                   <Ghost className="w-8 h-8 text-purple-500" /> Paranormal
                </h2>
              </div>
              <div className={styles.storiesGrid}>
                {paranormalPosts.map((post) => renderPost(post, true))}
              </div>
            </div>
          )}

          {waheedaPosts.length > 0 && (
            <div className={styles.collectionSection}>
              <div className={`${styles.collectionHeader} ${styles.ghostHeader}`}>
                <h2 className={`${styles.collectionTitle} ${styles.ghostTitle}`}>
                  വഹീദ (Waheeda)
                </h2>
              </div>
              <div className={styles.storiesGrid}>
                {waheedaPosts.map((post) => renderPost(post, true))}
              </div>
            </div>
          )}

          {otherPosts.length > 0 && (
            <div className={styles.collectionSection}>
              <div className={styles.collectionHeader}>
                <h2 className={styles.collectionTitle}>Other Tales</h2>
              </div>
              <div className={styles.storiesGrid}>
                {otherPosts.map((post) => renderPost(post, false))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
