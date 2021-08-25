interface Props {
  videoPath: string;
}
export function VideoDialog({videoPath}: Props) {
  return (
    <div className="relative w-screen h-240 w-100w sm:h-315 sm:w-560 lg:h-415 lg:w-800 xl:h-630 xl:w-1120">
      <iframe className="absolute left-0 top-0 w-full h-full"
              src={videoPath} title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
    </div>
  );
}

VideoDialog.defaultProps = {
  videoPath: 'https://www.youtube.com/embed/i4VcuplgScg'
}
