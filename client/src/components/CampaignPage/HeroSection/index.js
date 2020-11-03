import React, { useState, useEffect } from "react";
import { 
    HeroContainer, 
    HeroWrapper, 
    HeroRow, 
    HeroColumn1, 
    HeroColumn2, 
    HeroColumn1Header, 
    HeroColumn1ImageWrapper,
    HeroColumn1Image,
    HeroColumn1Ttile,
    HeroColumnParagraph,
    HeroColumn2Title,
    HeroColumn2Wrapper,
    HeroColumn2Cards,
    HeroColumnCard,
    HeroColumnCardImage,
    HeroColumnCardImg,
    HeroColumn2PaginationNavbar,
    HeroColumn2PaginationLists,
    HeroColumn2PaginationList,
    HeroColumn2PaginationActiveList,
    HeroColumn2CardContent
} from "./HeroSectionElements";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa"
import { getCampaigns } from "../../../actions/campaign"
import smartTrim from "../../../helpers/smartTrim"

const CampaignHeroSection = () => {
    const LEFT_PAGE = 'LEFT';
    const RIGHT_PAGE = 'RIGHT';

    const [selectedCampaigns, setSelectedCampaigns] = useState([])
    const [featuredCampaign, setFeaturedCampaign] = useState({
        image: {},
        title: "",
        description: "",
        buttonText: "",
        link: "",
        endDate: ""
    });

    const [page, setPage] = useState([]);
    const [campaigns, setCampaigns] = useState([]);
    const [paginate, setPaginate] = useState({
        totalRecords: null,
        totalPages: null,
        pageLimit: 3,
        pageNeighbours: 1,
        currentPage: 1
    });

    const { totalRecords, pageLimit, pageNeighbours, totalPages, currentPage } = paginate;


    useEffect(() => {
        loadCampaigns();
        loadCampaign();
    }, []);

    const loadCampaigns = async () => {
        try {
          const response = await getCampaigns();
          const allCampaigns = [...response];
          const campaignsLength = response.length;
          const selectedCamp = response.splice(0, 3);
          if (selectedCampaigns.length === 0) {
            setSelectedCampaigns([...selectedCamp]);
          }

          console.log("response", allCampaigns);
          setCampaigns(allCampaigns);
          initiPaginate(campaignsLength);
          fetchPageNumbers(campaignsLength);
        } catch (error) {
            console.log("Error", error); 
        }
    }

    const loadCampaign = async () => {
        try {
          const response = await getCampaigns();
          const campaign = response[0];
          setFeaturedCampaign({
              image: campaign.image,
              title: campaign.title,
              description: campaign.description,
              buttonText: campaign.buttonText,
              link: campaign.link,
              endDate: campaign.endDate
          });
        } catch (error) {
            console.log('error', error);
        }
    };

    const initiPaginate = (totalElementsLength) => {
        setPaginate({
            ...paginate,
            totalPages: Math.ceil(totalElementsLength / pageLimit),
            totalRecords: totalElementsLength,
        });
    }

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to ) {
            range.push(i);
            i += step;
        }

        return range;
    }

    const fetchPageNumbers = (totalPagesNum) => {
        // console.log("seleected", selectedCampaigns);
        // 총 페이지 수 = 총 캠페인 수 / limit (한 페이지 당 요소 수)
        const totalPages = Math.ceil(totalPagesNum / pageLimit);
        // console.log("totalPages", totalPages);
        // 현재 페이지
        const currentPage = paginate.currentPage;
        // console.log("currentPage", currentPage);
        // 이웃하고 있는 요소 개수 - 2개 << current >> 2개
        const pageNeighbours = paginate.pageNeighbours;
        // Control Panel에 보이는 요소 갯수 - Neighbour 2 기준 - 7개
        // 1 5 6 current 8 9 14
        const totalNumbers = (pageNeighbours * 2) + 3;
        // console.log("Total Numbers", totalNumbers);
        
        // <<, >> 기호 추가로 9개
        // 1 << 5 6 current 8 9 >> 14
        const totalBlocks = totalNumbers + 2;
        // console.log("totalBlocks", totalBlocks);

        // Control Panel의 총 요소의 갯수가 총 페이지 숫자보다 큰지 여부
        if (totalPages > totalBlocks) {
            // 현재 페이지 - 이웃 요소 개수 vs 2 
            const startPage = Math.max(2, currentPage - pageNeighbours);
            // console.log("startPage", startPage);
            // 최소값 총 페이지가 15개, 현 페이지가 14 일때  (14, 16) --> 14 출력
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            // console.log("endPage", endPage)
            let pages = range(startPage, endPage);
            // console.log("pages", pages);
            // hasLeftSpill: 왼쪽 편에 숨겨진 페이지가 존재하는가
            // hasRightSpill: 오른쪽 편에 숨겨진 페이지가 존재하는가
            // splitOffset: 왼쪽 혹은 오른쪽에 숨겨진 페이지 수
            const hasLeftSpill = startPage > 2;
            // console.log("hasLeftSpill", hasLeftSpill); 
            // 총 페이지 수에서 마지막 페이지 수를 뺸 것이 1 보다 큰가?
            // 마지막에 오면 더 이상 페이지가 없으므로 1 보다 작아지니까
            const hasRightSpill = (totalPages - endPage) > 1;
            // console.log("hasRightSpill", hasRightSpill);
            // 총 페이지 수 - control panel에 보이는 페이지 수
            const spillOffset = totalNumbers - (pages.length + 1);
            // console.log("spillOffset", spillOffset);
            
            switch (true) {
                // handle 1 << 5 6 current 8 9 10
                // 왼쪽편에 숨겨진 페이지가 존재하는가? true
                // 오른쪽에 숨겨진 페이지가 존재하는가? false
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle 1 2 3 current 5 6 > 10
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }

                case (hasLeftSpill && hasRightSpill):
                    default: {
                      pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                      break;
                }
            }

            console.log([1, ...pages, totalPages]);
            return setPage([1, ...pages, totalPages]);
        }

        console.log(range(1, totalPages));
        return setPage([...range(1, totalPages)]);
        // return range(1, totalPages);
    }

    const handleClick = page => e => {
        e.preventDefault();
        gotoPage(page);
    };

    const handleMoveLeft = e => {
        e.preventDefault();
        gotoPage(currentPage - (pageNeighbours * 2) - 1);
    };

    const handleMoveRight = e => {
        e.preventDefault();
        gotoPage(currentPage - (pageNeighbours * 2) - 1);
    }

    const gotoPage = (page = 0) => {
        const currentPage = Math.max(0, Math.min(page, totalPages));
        const offset = (currentPage - 1) * pageLimit;
        // console.log('offset', offset);
        console.log("campaigns123456", currentPage);
        const currentCampaigns = campaigns.slice(offset, offset + pageLimit);   
        console.log("campaigns", campaigns);
        console.log('currentCapmaigns', currentCampaigns);

        setPaginate({ ...paginate, currentPage, totalPages});
        setSelectedCampaigns([...currentCampaigns]);
    }
    
    return (
        <HeroContainer>
            <HeroWrapper>
                <HeroRow>
                    <HeroColumn1>
                        <HeroColumn1Header>이주의 캠페인</HeroColumn1Header>
                        <HeroColumn1ImageWrapper>
                            <HeroColumn1Image imgURL={`${featuredCampaign.image.url}`} />
                        </HeroColumn1ImageWrapper>
                        <HeroColumn1Ttile>{featuredCampaign.title}</HeroColumn1Ttile>
                        <HeroColumnParagraph>{(featuredCampaign.description)}</HeroColumnParagraph>
                    </HeroColumn1>
                    <HeroColumn2>
                        <HeroColumn2Wrapper>
                            <HeroColumn2Title>추천 캠페인</HeroColumn2Title>
                            <HeroColumn2Cards>
                                { selectedCampaigns && selectedCampaigns.map((c, i) => (
                                    <HeroColumnCard>
                                        <HeroColumnCardImage>
                                            <HeroColumnCardImg imgURL={`${c.image.url}`} />
                                        </HeroColumnCardImage>
                                        <HeroColumn2CardContent>
                                            <h1>{c.title}</h1>
                                            <p>{smartTrim(c.description, 100, ' ', '...')}</p>
                                        </HeroColumn2CardContent>
                                    </HeroColumnCard>
                                ))}
                            </HeroColumn2Cards>
                        </HeroColumn2Wrapper>
                        <HeroColumn2PaginationNavbar>
                            <HeroColumn2PaginationLists>
                                {page.map((p, i) => {
                                    if (p === LEFT_PAGE) return (
                                        <HeroColumn2PaginationList onClick={handleMoveLeft}>
                                            <FaAngleDoubleLeft />
                                        </HeroColumn2PaginationList>
                                    )

                                    if (p === RIGHT_PAGE) return (
                                        <HeroColumn2PaginationList onClick={handleMoveRight}>
                                            <FaAngleDoubleRight />
                                        </HeroColumn2PaginationList>
                                    )

                                    if (p === currentPage) return (
                                        <HeroColumn2PaginationActiveList onClick={handleClick(p)}>
                                            {p}
                                        </HeroColumn2PaginationActiveList>
                                    )

                                    return (
                                        <HeroColumn2PaginationList onClick={handleClick(p)}>
                                            {p}
                                        </HeroColumn2PaginationList>
                                    )
                                })}
                            </HeroColumn2PaginationLists>
                        </HeroColumn2PaginationNavbar>
                    </HeroColumn2>
                </HeroRow>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default CampaignHeroSection;