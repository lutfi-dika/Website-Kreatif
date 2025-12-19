import "../styles/RunningText.css";

export default function RunningText() {
    return (
        <div className="rt-wrapper">
            {/* Running ke kiri */}
            <div className="marquee left">
                <div className="track">
                    <span>✦ Selamat Datang Di WEBKRAF ✦ Website Kreatif ✦</span>
                </div>
            </div>

            {/* Running ke kanan */}
            <div className="marquee right">
                <div className="track">
                    <span>✦ Selamat Datang Di WEBKRAF ✦ Website Kreatif ✦</span>
                </div>
            </div>
        </div>
    );
}
