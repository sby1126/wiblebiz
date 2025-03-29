export function ServiceReq() {
    return (
        <>
            <h2 className="heading-2">서비스 문의</h2>
            <div className="inquiry-info">
                <a
                    className="btn-xxlg btn-tertiary"
                    href="/downloads/proposal.pdf"
                    download="기아 비즈 서비스 제안서"
                >
                    <i className="ic download"></i>
                    <span>서비스 제안서 다운로드</span>
                </a>
                <a className="btn-xxlg btn-tertiary" href="/Counsel">
                    <i className="ic write"></i>
                    <span>상담문의 등록하기</span>
                </a>
                <a
                    className="btn-xxlg btn-tertiary"
                    href="https://pf.kakao.com/_xfLxjdb"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="ic talk"></i>
                    <span>
                        카톡으로 문의하기 <em>ID : 기아 비즈</em>
                    </span>
                </a>
            </div>
        </>
    )
}
