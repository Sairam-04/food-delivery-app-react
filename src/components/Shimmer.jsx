const ShimmerCard = () =>{
    return(
        <div className="shimmer-card">
            <div className="shimmer-card-img"></div>
            <div className="shimmer-card-title"></div>
            <div className="shimmer-card-cuisines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="shimmer-card-price"></div>
            <div className="shimmer-card-rating">
                <span></span>
                <span></span>
                <span></span>
            </div>

        </div>
    )
}

const Shimmer = () => {
  return (
    <div className="shimmer-container">
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
    </div>
  )
}

export default Shimmer;
