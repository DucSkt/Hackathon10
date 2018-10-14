package com.example.ducskt.threeword.model;

public class search {
    String Keyword;
    String Contents;
    String Images;

    public String getKeyword() {
        return Keyword;
    }

    public void setKeyword(String keyword) {
        Keyword = keyword;
    }

    public String getContents() {
        return Contents;
    }

    public void setContents(String contents) {
        Contents = contents;
    }

    public String getImages() {
        return Images;
    }

    public void setImages(String images) {
        Images = images;
    }

    public search(String keyword, String contents, String images) {
        Keyword = keyword;
        Contents = contents;
        Images = images;
    }
}

