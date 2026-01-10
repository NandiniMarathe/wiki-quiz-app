import requests
from bs4 import BeautifulSoup

def scrape_wikipedia(url: str):
    if "wikipedia.org/wiki/" not in url:
        raise Exception("Invalid URL")

    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                      "AppleWebKit/537.36 (KHTML, like Gecko) "
                      "Chrome/143.0.0.0 Safari/537.36"
    }

    r = requests.get(url, headers=headers)
    if r.status_code != 200:
        raise Exception(f"Failed to fetch page, status {r.status_code}")

    soup = BeautifulSoup(r.text, "html.parser")
    title_tag = soup.find("h1", {"id": "firstHeading"})
    if not title_tag:
        raise Exception("Could not find title on page")
    title = title_tag.text

    content = ""
    for p in soup.find_all("p"):
        content += p.get_text(separator=" ", strip=True) + " "

    return title, content.strip()
