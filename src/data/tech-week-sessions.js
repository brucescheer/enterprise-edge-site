/* Reviewed derivatives from Bruce's supplied media bundle. Keep the order
   approved for the homepage. No participant names or quotes are inferred.

   Caption drafts remain outside the public asset directory until their
   wording has been checked against the recordings. Add only reviewed
   `captions` (WebVTT URL) and `transcript` fields to the relevant entries. */
const asset = '/assets/tech-week/';

export const SESSION_VIDEOS = [
  { id: '0529', duration: '19 seconds', note: 'Recorded before the Los Angeles Tech Week session.' },
  // One-player Vimeo trial. Remove vimeoId to restore the retained local MP4.
  { id: '0530', duration: '18 seconds', vimeoId: '1234387764' },
  { id: '0531', duration: '12 seconds' },
  { id: '0532', duration: '12 seconds' },
  { id: '0528', duration: '13 seconds' },
].map((video, index) => ({
  ...video,
  title: `Attendee takeaway ${index + 1}`,
  src: `${asset}img_${video.id}.mp4`,
  poster: `${asset}img_${video.id}-poster.webp`,
  width: 720,
  height: 1280,
}));

export const SESSION_PHOTO = {
  src: `${asset}enterprise-edge-workshop-1600.jpg`,
  webp: `${asset}enterprise-edge-workshop-1600.webp`,
  webpSmall: `${asset}enterprise-edge-workshop-960.webp`,
  alt: 'Workshop participants pose behind a conference table, with an Enterprise Edge presentation on screen.',
  width: 1600,
  height: 1200,
};
