package modelService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import model.Product;
import modelRepository.ProductRepository;


@Service
public class ProductService {
	@Autowired
	private ProductRepository productRepository;
	
	public Product createProduct(Product product)
	{
		
		return productRepository.save(product);
		
	}
	
	public List<Product> GetAll()
	{
		return productRepository.findAll();
	}

}
