package com.url.url_shortener_sb.Repository;


import com.url.url_shortener_sb.models.UrlMapping;
import com.url.url_shortener_sb.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UrlMappingRepository extends JpaRepository<UrlMapping,Long> {
     UrlMapping findByShortUrl(String shortUrl);
     List<UrlMapping> findByUser(User user);

}
